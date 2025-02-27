import { Tabs } from "expo-router";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useThemeContext } from "../../contexts/ThemeContext";
import { usePathname } from "expo-router";

export default function TabLayout() {
  const { paperTheme } = useThemeContext();
  const pathname = usePathname();
  const isIndex = pathname === "/";

  const iconSize = 28;
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isIndex
            ? paperTheme.colors.onSecondary
            : paperTheme.colors.background,
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 10,
          alignContent: "center",
          borderTopColor: "white",
          borderTopColor: "white",
        },
        tabBarActiveTintColor: "rgb(111, 208, 238)",
        tabBarInactiveTintColor: "lightgray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={iconSize} color={color} />
          ),
        }}
        screenOptions={{ tabBarActiveTintColor: "teal" }}
      />
      <Tabs.Screen
        name="myRecepies"
        options={{
          header: () => null,
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="menu-book" size={iconSize} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          header: () => null,
          title: "",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={iconSize} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
