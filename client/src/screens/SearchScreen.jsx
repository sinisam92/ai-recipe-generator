import { useState } from "react";
import { View, FlatList, StyleSheet, ImageBackground } from "react-native";
import { ingredients } from "../data/ingrediants";
import ItemCard from "../components/ItemCard";

export default function SearchScreen({
  searchQuery,
  filteredData,
  selectedItems,
  setSelectedItems,
  setSelectedForDelete,
  selectedForDelete,
}) {
  return (
    <View style={styles.container}>
      {filteredData.length !== 0 && searchQuery !== "" ? (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              ingredients={ingredients}
              setSelectedItems={setSelectedItems}
              disableLongPress={true}
              selectedItems={selectedItems}
            />
          )}
        />
      ) : selectedItems.length !== 0 ? (
        <FlatList
          data={selectedItems}
          keyExtractor={(item) => item.name}
          numColumns={2}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              ingredients={ingredients}
              disableOnPress={true}
              setSelectedForDelete={setSelectedForDelete}
              selectedForDelete={selectedForDelete}
              selectedItems={null}
            />
          )}
        />
      ) : (
        <ImageBackground
          source={require("../../assets/images/basket-transparent.png")}
          style={styles.background}
          resizeMode="cover"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    marginBottom: -20,
  },
});
