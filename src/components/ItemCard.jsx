import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";

const ItemCard = ({ item, ingredients }) => {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: ingredients[item].image }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>{ingredients[item].name}</Text>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    width: "100%",
    flexWrap: "wrap",
    textTransform: "capitalize",
    color: "#ffffff",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});

export default ItemCard;
