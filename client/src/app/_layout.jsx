import { useEffect, useState } from "react";
import { Stack, useRouter, useSegments, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth, AuthProvider } from "../contexts/AuthContext";
import { RecipeProvider } from "../contexts/RecipeContext";
import { useThemeContext, ThemeProviderCustom } from "../contexts/ThemeContext";
import RecipeResult from "./RecipeResult";
import MainNavigation from "../components/MainNavigation";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import DrawerComponent from "../components/DrawerComponent";
import { View } from "react-native";
import ProfileScreen from "./ProfileScreen";

function RootLayoutNav() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [active, setActive] = useState("home");

  const { paperTheme } = useThemeContext();
  const { isLoading, accessToken } = useAuth(); // Updated to use accessToken
  const segments = useSegments();
  const router = useRouter();
  const pathname = usePathname();

  const isIndex = pathname === "/";
  const isAuth = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    if (!isLoading) {
      const inAuthGroup = segments[0] === "(auth)";
      if (!accessToken && !inAuthGroup) {
        router.replace("/login");
      } else if (accessToken && inAuthGroup) {
        router.replace("/(tabs)");
      }
    }
  }, [isLoading, accessToken, segments, router]);

  const handleOnPress = () => setDrawerVisible(true);

  const drawerWidth = 410;
  const translateX = useSharedValue(-drawerWidth);

  useEffect(() => {
    if (drawerVisible) {
      setIsDrawerMounted(true);
      translateX.value = withTiming(0, { duration: 300 });
    } else {
      translateX.value = withTiming(-drawerWidth, { duration: 300 }, () => {
        runOnJS(setIsDrawerMounted)(false);
      });
    }
  }, [drawerVisible, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={{ flex: 1, backgroundColor: paperTheme.colors.background }}>
      <StatusBar
        animated={true}
        style={paperTheme.dark ? "light" : "dark"}
        backgroundColor={paperTheme.colors.background}
      />
      {!isAuth && <MainNavigation handleOnPress={handleOnPress} isIndexPath={isIndex} />}

      {isDrawerMounted && (
        <DrawerComponent
          setIsDrawerMounted={setIsDrawerMounted}
          drawerVisible={drawerVisible}
          setDrawerVisible={setDrawerVisible}
          animatedStyle={animatedStyle}
          active={active}
          setActive={setActive}
        />
      )}

      <Stack screenOptions={{ headerShown: false }}>
        {!accessToken ? (
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="RecipeResult"
              component={RecipeResult}
              options={{
                title: "Your Recipe",
                contentStyle: {
                  flex: 1,
                },
              }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                title: "Profile",
              }}
            />
          </>
        )}
        <Stack.Screen name="NotFound" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <ThemeProviderCustom>
          <RootLayoutNav />
        </ThemeProviderCustom>
      </RecipeProvider>
    </AuthProvider>
  );
}
