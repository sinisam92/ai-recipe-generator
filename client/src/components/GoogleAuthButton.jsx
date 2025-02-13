import React, { useEffect } from "react";
import { Image } from "react-native";
import { Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useAuthRequest } from "expo-auth-session/providers/google";
import { useAuth } from "../../contexts/AuthContext";

WebBrowser.maybeCompleteAuthSession();
// WebBrowser.maybeCompleteAuthSession({ skipRedirectCheck: true });

const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;
const GOOGLE_ANDROID_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID;

const discovery = {
  authorizationEndpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  tokenEndpoint: "https://oauth2.googleapis.com/token",
  revocationEndpoint: "https://oauth2.googleapis.com/revoke",
};

const GoogleLoginButton = () => {
  const { googleLogin, isAuthenticating } = useAuth();
  const redirectUri = AuthSession.makeRedirectUri({
    // useProxy: Platform.OS !== "web", // Use Expo proxy in dev, deep link in production
    native: "com.anonymous.recepiegenerator:", // Redirect for standalone app
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
    if (response?.type === "success" && response.authentication?.accessToken) {
      googleLogin(response.authentication.accessToken);
    }
  }, [response]);

  return (
    <Button
      icon={() => (
        <Image
          source={require("../../assets/icons/google.png")}
          style={{ width: 20, height: 20 }}
        />
      )}
      mode="outlined"
      onPress={() => promptAsync()}
      disabled={!request || isAuthenticating}
      loading={isAuthenticating}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
