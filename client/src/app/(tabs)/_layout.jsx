import { Tabs } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingBottom: 10,
          alignContent: "center",
          borderTopColor: "white",
          borderTopColor: "white",
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "lightgray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
        }}
        screenOptions={{ tabBarActiveTintColor: "red" }}
      />
      <Tabs.Screen
        name="myRecepies"
        options={{
          title: "My Recepies",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="birthday-cake" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
