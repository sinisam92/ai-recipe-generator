import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

const Loading = () => {
  const { paperTheme } = useThemeContext();
  return (
    <View
      style={[styles.loadingContainer, { backgroundColor: paperTheme.colors.background }]}
    >
      <Image
        source={
          paperTheme.dark
            ? require("../../assets/animations/generate-white-2.gif")
            : require("../../assets/animations/recipe-for-light.gif")
        }
        style={{ width: 200, height: 200 }}
      />
      <Text style={[styles.loadingText, { color: paperTheme.colors.inversePrimary }]}>
        Generating your recipe...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default Loading;
