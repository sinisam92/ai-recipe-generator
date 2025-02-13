import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { authReducer } from "../src/reducers/authReducer";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  user: null,
  token: null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const BASE_URL = process.env.EXPO_PUBLIC_BASE_API_URL;
  console.log("BASE_URL:", BASE_URL);

  const authenticateUser = async (method, credentials) => {
    dispatch({ type: "AUTH_START" });

    try {
      const endpoint = method === "google" ? "/auth/google" : "/auth/login";
      const response = await axios.post(`${BASE_URL}${endpoint}`, credentials);

      await AsyncStorage.multiSet([
        ["authToken", response.data.token],
        ["user", JSON.stringify(response.data.user)],
      ]);

      dispatch({ type: "AUTH_SUCCESS", payload: response.data });
    } catch (error) {
      const errorDetails = {
        message: error.message,
        code: error.code,
        response: {
          status: error.response?.status,
          data: error.response?.data,
          headers: error.response?.headers,
        },
        config: {
          url: error.config?.url,
          method: error.config?.method,
        },
      };

      console.error("Full Authentication Error:", errorDetails);

      dispatch({
        type: "AUTH_FAILURE",
        payload: error.response?.data?.message || error.message || "Unknown error",
      });

      throw error;
    }
  };

  const emailLogin = (email, password) => authenticateUser("email", { email, password });
  const googleLogin = (accessToken) =>
    authenticateUser("google", { access_token: accessToken });

  const checkAuthState = async () => {
    try {
      const [token, user] = await AsyncStorage.multiGet(["authToken", "user"]);
      if (token[1] && user[1]) {
        dispatch({
          type: "AUTH_SUCCESS",
          payload: {
            token: token[1],
            user: JSON.parse(user[1]),
          },
        });
      }
    } catch (error) {
      dispatch({ type: "AUTH_FAILURE", payload: error.message });
    }
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  const register = async (email, password) => {
    console.log("Attempting registration with:", { email, password });
    try {
      dispatch({ type: "AUTH_START" });

      const response = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        password,
      });
      console.log("Registration response---:", response);

      if (!response.data.user) {
        throw new Error("User data missing in registration response");
      }

      console.log("Registration response:", response.data);
      await AsyncStorage.multiSet([
        ["authToken", response.data.token],
        ["user", JSON.stringify(response.data.user)],
      ]);

      dispatch({ type: "AUTH_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Registration error:", {
        error: error.response?.data || error.message,
        config: error.config,
      });
      dispatch({
        type: "AUTH_FAILURE",
        payload: error.response?.data?.message || "Registration failed",
      });
      throw error;
    }
  };

  const login = async (email, password) => {
    return authenticateUser("email", { email, password });
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        isLoading: state.isAuthenticating,
        isAuthenticated: state.isAuthenticated,
        userToken: state.token,
        user: state.user,
        error: state.error,
        emailLogin,
        googleLogin,
        logout: () => {
          AsyncStorage.multiRemove(["authToken", "user"]);
          dispatch({ type: "LOGOUT" });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
