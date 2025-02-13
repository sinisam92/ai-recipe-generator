// import React, { useEffect } from "react";
// import { Image } from "react-native";
// import { Button } from "react-native-paper";
// import * as WebBrowser from "expo-web-browser";
// import * as AuthSession from "expo-auth-session";
// import { useAuthRequest } from "expo-auth-session/providers/google";

// WebBrowser.maybeCompleteAuthSession();

// const GOOGLE_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;
// const GOOGLE_IOS_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID;
// const GOOGLE_ANDROID_CLIENT_ID = process.env.EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID;

// const GoogleLoginButton = () => {
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: GOOGLE_CLIENT_ID,
//       iosClientId: GOOGLE_IOS_CLIENT_ID,
//       androidClientId: GOOGLE_ANDROID_CLIENT_ID,
//       scopes: ["profile", "email"],
//       redirectUri: AuthSession.makeRedirectUri({
//         useProxy: true,
//       }),
//     },
//     AuthSession.makeRedirectUri({ useProxy: true })
//   );

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { authentication } = response;
//       sendToBackend(authentication.accessToken);
//     }
//   }, [response]);

//   const sendToBackend = async (token) => {
//     const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const user = await res.json();

//     await fetch("http://192.168.178.46:3000/auth/google", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: user.email, name: user.name, googleId: user.id }),
//     });
//   };

//   return (
//     <Button
//       icon={() => (
//         <Image
//           source={require("../../assets/icons/google.png")}
//           style={{ width: 20, height: 20 }}
//         />
//       )}
//       mode="outlined"
//       onPress={() => promptAsync()}
//       disabled={!request}
//     >
//       Continue with Google
//     </Button>
//   );
// };

// export default GoogleLoginButton;
import React, { useEffect } from "react";
import { Image } from "react-native";
import { Button } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session/providers/google";

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
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: GOOGLE_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      scopes: ["profile", "email"],
      redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication?.accessToken) {
        sendToBackend(authentication.accessToken);
      }
    }
  }, [response]);

  // const sendToBackend = async (token) => {
  //   try {
  //     const res = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });

  //     if (!res.ok) throw new Error("Failed to fetch user info");

  //     const user = await res.json();
  //     console.log("User Info:", user);

  //     await fetch("http://192.168.178.46:3000/auth/google", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email: user.email, name: user.name, googleId: user.id }),
  //     });
  //   } catch (error) {
  //     console.error("Error sending token to backend:", error);
  //   }
  // };
  const sendToBackend = async (token) => {
    console.log("Sending token to backend:", token);
    try {
      const response = await fetch("http://192.168.178.46:3000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_token: token }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Authenticated user:", data.user);
        // Store the JWT token in AsyncStorage or a secure place
        await AsyncStorage.setItem("authToken", data.token);
      } else {
        console.error("Failed to authenticate:", data.error);
      }
    } catch (error) {
      console.error("Error sending token to backend:", error);
    }
  };

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
      disabled={!request}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleLoginButton;
