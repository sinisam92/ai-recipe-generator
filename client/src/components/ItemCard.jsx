import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "../hooks/useTheme";

const ItemCard = ({
  item,
  setSelectedItems,
  disableOnPress,
  setSelectedForDelete,
  selectedForDelete,
  disableLongPress,
  selectedItems,
}) => {
  const { colorScheme } = useTheme();
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

  const isSelectedForDeletion = selectedForDelete?.includes(item.name);
  const isItemSelectedInSearchScreen =
    Array.isArray(selectedItems) &&
    selectedItems.some((selected) => selected.name === item.name);

  return (
    <View
      style={[
        styles.cardWrapper,
        { backgroundColor: colorScheme === "dark" ? "#000" : "#fff" },
      ]}
    >
      <Pressable
        onPress={handlePress}
        onLongPress={handleLongPress}
        delayLongPress={200}
        delayPressIn={0}
        style={styles.cardWrapperTouchable}
      >
        <Card
          style={[
            styles.card,
            isSelectedForDeletion && styles.selectedCard,
            isItemSelectedInSearchScreen && styles.selectedInSearch,
          ]}
        >
          <Card.Cover source={{ uri: item.image }} style={styles.image} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>{item.name}</Text>
          </View>
          {isItemSelectedInSearchScreen && (
            <AntDesign
              name="checksquareo"
              size={24}
              color="green"
              style={styles.checkedIcon}
            />
          )}
          {isSelectedForDeletion && (
            <AntDesign
              name="checksquareo"
              size={24}
              color="red"
              style={styles.checkedIcon}
            />
          )}
        </Card>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    margin: 10,
    borderRadius: 30,
  },
  cardWrapperTouchable: {
    flex: 1,
    position: "relative",
  },
  card: {
    borderRadius: 14,
  },
  image: {
    height: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    borderColor: "red",
    borderWidth: 2,
  },
  selectedInSearch: {
    borderColor: "green",
    borderWidth: 2,
    backgroundColor: "rgba(0, 255, 0, 0.2)",
  },
  checkedIcon: {
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 5, //
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
});

export default ItemCard;
