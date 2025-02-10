// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import {
//   MD3DarkTheme,
//   MD3LightTheme,
//   PaperProvider,
//   adaptNavigationTheme,
// } from "react-native-paper";
// import {
//   DarkTheme as NavigationDarkTheme,
//   DefaultTheme as NavigationDefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import merge from "deepmerge";
// import { Colors } from "../constants/Colors";
// import { useTheme } from "../hooks/useTheme";
// import { AuthProvider } from "../../contexts/AuthContext";

// const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
// const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

// const { LightTheme, DarkTheme } = adaptNavigationTheme({
//   reactNavigationLight: NavigationDefaultTheme,
//   reactNavigationDark: NavigationDarkTheme,
// });

// const CombinedLightTheme = merge(LightTheme, customLightTheme);
// const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

// export default function RootLayout() {
//   const { colorScheme } = useTheme();

//   const paperTheme = colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

//   return (
//     <AuthProvider>
//       <PaperProvider theme={paperTheme}>
//         <ThemeProvider value={paperTheme}>
//           <Stack>
//             <Stack.Screen
//               name="(tabs)"
//               options={{
//                 headerShown: false,
//               }}
//             />
//             <Stack.Screen name="NotFound" />
//           </Stack>
//         </ThemeProvider>
//         <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
//       </PaperProvider>
//     </AuthProvider>
//   );
// }
import { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Colors } from "../constants/Colors";
import { useTheme } from "../hooks/useTheme";
import { AuthProvider, useAuth } from "../../contexts/AuthContext";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

function RootLayoutNav() {
  const { colorScheme } = useTheme();
  const { isLoading, userToken } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      const inAuthGroup = segments[0] === "(auth)";
      if (!userToken && !inAuthGroup) {
        router.replace("/login");
      } else if (userToken && inAuthGroup) {
        router.replace("/(tabs)");
      }
    }
  }, [isLoading, userToken, segments, router]);

  const paperTheme = colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>
        <Stack>
          {!userToken ? (
            // Auth screens
            <Stack.Screen
              name="(auth)"
              options={{
                headerShown: false,
                headerTitleStyle: { display: "none" },
              }}
            />
          ) : (
            // App screens
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
          )}
          <Stack.Screen name="NotFound" />
        </Stack>
      </ThemeProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </PaperProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
    </AuthProvider>
  );
}
