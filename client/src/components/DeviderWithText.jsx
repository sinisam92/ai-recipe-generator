import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DividerWithText = ({ text }) => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "grey",
  },
  text: {
    marginHorizontal: 10,
    color: "grey",
    fontSize: 16,
  },
});

export default DividerWithText;
