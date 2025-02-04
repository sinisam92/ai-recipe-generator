import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const MainNavigation = ({ colorScheme }) => {
  return (
    <View style={styles.navigation}>
      <Ionicons
        name="arrow-back"
        size={24}
        color={colorScheme === "dark" ? "#ffffff" : "#000000"}
        style={styles.icon}
        onPress={() => router.back()}
      />
      <Feather
        name="menu"
        size={24}
        color={colorScheme === "dark" ? "#ffffff" : "#000000"}
        style={styles.icon}
        onPress={() => console.log("Hamburger Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    width: "100%",
  },
  icon: {
    marginHorizontal: 5,
    marginTop: 5,
  },
});

export default MainNavigation;
