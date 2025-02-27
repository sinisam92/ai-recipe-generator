import React, { createContext, useReducer, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { authReducer } from "../reducers/authReducer";

// API utility
const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_API_URL,
  timeout: 10000,
});

// Context creation
export const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

// Storage utilities
const storage = {
  async saveTokens(accessToken, refreshToken, user) {
    const userData = {
      ...user,
      createdAt: user.createdAt,
      createdAtFormatted: user.createdAtFormatted,
    };

    await AsyncStorage.multiSet([
      ["accessToken", accessToken],
      ["refreshToken", refreshToken],
      ["user", JSON.stringify(userData)],
    ]);
  },
  async clearTokens() {
    await AsyncStorage.multiRemove(["accessToken", "refreshToken", "user"]);
  },
  async getTokens() {
    const [[, accessToken], [, refreshToken], [, user]] = await AsyncStorage.multiGet([
      "accessToken",
      "refreshToken",
      "user",
    ]);
    return { accessToken, refreshToken, user: user ? JSON.parse(user) : null };
  },
  async storeRecipes(recipes) {
    await AsyncStorage.setItem("userRecipes", JSON.stringify(recipes));
  },
  async getStoredRecipes() {
    const recipes = await AsyncStorage.getItem("userRecipes");
    return recipes ? JSON.parse(recipes) : [];
  },
  async clearRecipes() {
    await AsyncStorage.removeItem("userRecipes");
  },
};

// Add this utility function at the top level
const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch (e) {
    return true;
  }
};

// API service
const authService = {
  async login(email, password) {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },
  async register(email, password) {
    const response = await api.post("/auth/register", { email, password });
    return response.data;
  },
  async googleLogin(accessToken) {
    const response = await api.post("/auth/google", { access_token: accessToken });
    return response.data;
  },
  async refreshToken(refreshToken) {
    const response = await api.post("/auth/refresh", { refreshToken });
    return response.data;
  },
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    let isMounted = true;

    const initializeAuth = async () => {
      try {
        const { accessToken, refreshToken, user } = await storage.getTokens();

        if (!isMounted) return;

        if (accessToken && user && !isTokenExpired(accessToken)) {
          // Valid access token exists
          dispatch({
            type: "AUTH_SUCCESS",
            payload: { accessToken, refreshToken, user },
          });
        } else if (refreshToken && !isTokenExpired(refreshToken)) {
          // Try to refresh the token
          try {
            const response = await authService.refreshToken(refreshToken);
            if (response.accessToken && response.refreshToken) {
              await storage.saveTokens(
                response.accessToken,
                response.refreshToken,
                response.user || user
              );
              dispatch({
                type: "AUTH_SUCCESS",
                payload: {
                  accessToken: response.accessToken,
                  refreshToken: response.refreshToken,
                  user: response.user || user,
                },
              });
            }
          } catch (error) {
            await storage.clearTokens();
            dispatch({ type: "AUTH_FAILURE", payload: null });
          }
        } else {
          // No valid tokens
          await storage.clearTokens();
          dispatch({ type: "AUTH_FAILURE", payload: null });
        }
      } catch (error) {
        if (isMounted) {
          console.error("Auth initialization failed:", error);
          dispatch({ type: "AUTH_FAILURE", payload: null });
        }
      }
    };

    initializeAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const refreshAccessToken = useCallback(async () => {
    try {
      const { refreshToken, accessToken } = await storage.getTokens();

      if (
        (!refreshToken || isTokenExpired(refreshToken)) &&
        (!accessToken || isTokenExpired(accessToken))
      ) {
        await logout();
        throw new Error("All tokens expired. Please login again.");
      }

      dispatch({ type: "AUTH_REFRESH_START" });
      const response = await authService.refreshToken(refreshToken);

      if (!response.accessToken || !response.refreshToken) {
        throw new Error("Invalid token response");
      }

      await storage.saveTokens(
        response.accessToken,
        response.refreshToken,
        response.user || state.user
      );

      dispatch({
        type: "AUTH_REFRESH_SUCCESS",
        payload: {
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        },
      });

      return response.accessToken;
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE", payload: "Token refresh failed" });
      await logout();
      throw new Error("Session expired. Please login again.");
    }
  }, [logout, state.user]);

  // Authentication handler
  const authenticate = useCallback(async (method, credentials) => {
    try {
      dispatch({ type: "AUTH_START" });
      let response;

      switch (method) {
        case "email":
          response = await authService.login(credentials.email, credentials.password);
          break;
        case "google":
          response = await authService.googleLogin(credentials.access_token);
          break;
        case "register":
          response = await authService.register(credentials.email, credentials.password);

          break;
        default:
          throw new Error("Invalid authentication method");
      }

      await storage.saveTokens(
        response.accessToken,
        response.refreshToken,
        response.user
      );
      dispatch({ type: "AUTH_SUCCESS", payload: response });
    } catch (error) {
      dispatch({
        type: "AUTH_FAILURE",
        payload: error.response?.data?.message || error.message,
      });
      throw error;
    }
  }, []);

  const logout = useCallback(async () => {
    await Promise.all([storage.clearTokens(), storage.clearRecipes()]);
    dispatch({ type: "LOGOUT" });
  }, []);

  // Axios interceptor for token refresh
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return api(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => api.interceptors.response.eject(interceptor);
  }, [refreshAccessToken]);

  const apiRequest = useCallback(
    async (url, method = "GET", data = null, retryCount = 0) => {
      try {
        const { accessToken } = await storage.getTokens();

        // Check if token is expired before making the request
        if (!accessToken || isTokenExpired(accessToken)) {
          const newToken = await refreshAccessToken();
          if (!newToken) {
            throw new Error("Failed to refresh token");
          }
        }

        const { accessToken: currentToken } = await storage.getTokens();
        const response = await api({
          url,
          method,
          data,
          headers: { Authorization: `Bearer ${currentToken}` },
        });

        if (url.includes("/recipes") && method === "GET") {
          await storage.storeRecipes(response.data);
        }

        return response.data;
      } catch (error) {
        if (error.response?.status === 401 && retryCount < 2) {
          try {
            await refreshAccessToken();
            // Retry the request with exponential backoff
            await new Promise((resolve) =>
              setTimeout(resolve, Math.pow(2, retryCount) * 1000)
            );
            return apiRequest(url, method, data, retryCount + 1);
          } catch (refreshError) {
            await logout();
            throw new Error("Session expired. Please login again.");
          }
        }
        throw error;
      }
    },
    [refreshAccessToken, logout]
  );

  const value = {
    login: (email, password) => authenticate("email", { email, password }),
    register: (email, password) => authenticate("register", { email, password }),
    googleLogin: (accessToken) => authenticate("google", { access_token: accessToken }),
    logout,
    apiRequest,
    ...state,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
