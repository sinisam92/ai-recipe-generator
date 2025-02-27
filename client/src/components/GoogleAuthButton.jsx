import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Button, Text } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";

WebBrowser.maybeCompleteAuthSession();

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID;

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

const GoogleLoginButton = () => {
  const [error, setError] = useState(null);
  const { googleLogin, isLoading } = useAuth();
  const { paperTheme } = useThemeContext();
  const redirectUri = AuthSession.makeRedirectUri({
    native: "com.anonymous.recepiegenerator:",
  });

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: GOOGLE_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      scopes: ["profile", "email"],
      redirectUri,
    },
    discovery
  );

  useEffect(() => {
    if (response) {
      if (response.type === "success" && response.authentication?.accessToken) {
        handleGoogleLogin(response.authentication.accessToken);
      } else if (response.type === "error") {
        setError("Google authentication failed. Please try again.");
      } else if (response.type === "dismiss") {
        setError(null);
      }
    }
  }, [response]);

  const handleGoogleLogin = async (accessToken) => {
    try {
      setError(null);
      await googleLogin(accessToken);
    } catch (err) {
      setError(err.message || "Failed to log in with Google. Please try again.");
    }
  };

  return (
    <>
      {error && (
        <Text style={{ color: "red", marginBottom: 8, textAlign: "center" }}>
          {error}
        </Text>
      )}
      <Button
        icon={() => (
          <Image
            source={require("../../assets/icons/google.png")}
            style={{ width: 20, height: 20 }}
          />
        )}
        mode="outlined"
        onPress={() => promptAsync()}
        disabled={!request || isLoading}
        loading={isLoading}
        textColor={paperTheme.colors.inversePrimary}
        style={{ marginVertical: 8 }}
      >
        Continue with Google
      </Button>
    </>
  );
};

export default GoogleLoginButton;
