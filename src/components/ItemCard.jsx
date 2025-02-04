import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ItemCard = ({
  item,
  setSelectedItems,
  disableOnPress,
  setSelectedForDelete,
  selectedForDelete,
  disableLongPress,
}) => {
  const handlePress = () => {
    if (!disableOnPress) {
      setSelectedItems((prev) => {
        const isExist = prev.find((prevItem) => prevItem.name === item.name);
        if (isExist) {
          return prev.filter((prevItem) => prevItem.name !== item.name);
        } else {
          return [...prev, item];
        }
      });
    }
  };

  const handleLongPress = () => {
    if (disableLongPress) return;
    setSelectedForDelete((prev) => {
      if (prev.includes(item.name)) {
        return prev.filter((i) => i !== item.name);
      } else {
        return [...prev, item.name];
      }
    });
  };

  const isSelected = selectedForDelete?.includes(item.name);

  return (
    <View style={styles.cardWrapper}>
      <TouchableOpacity
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={200}
      >
        <Card style={[styles.card, isSelected && styles.selectedCard]}>
          <Card.Cover source={{ uri: item.image }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{item.name}</Text>
          </View>
        </Card>
      </TouchableOpacity>
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
    borderRadius: 20,
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
  selectedCard: {
    borderColor: "blue",
    borderWidth: 2,
  },
});

export default ItemCard;
