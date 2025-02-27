import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import AvatarComponent from "./AvatarComponent";

import { useThemeContext } from "../contexts/ThemeContext";

const MainNavigation = ({ isIndexPath, handleOnPress }) => {
  const { paperTheme } = useThemeContext();

  return (
    <View style={[styles.navigation, { backgroundColor: paperTheme.colors.background }]}>
      {isIndexPath ? null : (
        <Ionicons
          name="arrow-back"
          size={24}
          color={paperTheme.colors.inversePrimary}
          style={styles.icon}
          onPress={() => router.back()}
        />
      )}

      <AvatarComponent handleOnPress={handleOnPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 50,
    height: 80,
    zIndex: 1200,
  },
  icon: {
    marginHorizontal: 5,
    marginTop: 5,
  },
});

export default MainNavigation;
