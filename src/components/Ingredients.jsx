import React from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet } from "react-native";
import { ingredients } from "../data/ingrediants"; // Adjust the path if needed
import ItemCard from "./ItemCard";

const Ingredients = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <ItemCard item={item} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick Category</Text>

      <FlatList
        data={ingredients}
        renderItem={renderItem}
        // keyExtractor={(item) => item.id.toString()} // Make sure each ingredient has a unique `id`
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  cardContainer: {
    marginBottom: 15, // Space between cards
    borderRadius: 10, // Rounded corners for the cards
    overflow: "hidden", // Prevent child content from overflowing
  },
  card: {
    width: "100%",
    height: 150, // Adjust this based on how large you want the cards to be
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden", // Ensure the image fits inside the card
  },
  cardImage: {
    borderRadius: 10, // Match the card's border radius
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textShadowColor: "black", // For text outline effect
    textShadowOffset: { width: -1, height: 1 }, // Shadow effect for the outline
    textShadowRadius: 10, // Increase for thicker outline
    textAlign: "center",
  },
});

export default Ingredients;
