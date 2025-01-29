import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";

const ItemCard = ({ item }) => {
  console.log("item in item card", item);
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image }} />
        <Text style={styles.overlayText}>{item.name}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  card: {
    width: 150,
    height: 100,
    position: "relative",
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "50%" }],
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ItemCard;
