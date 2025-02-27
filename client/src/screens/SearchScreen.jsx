import { View, FlatList, StyleSheet, ImageBackground, Text, Image } from "react-native";
import { ingredients } from "../data/ingrediants";
import ItemCard from "../components/ItemCard";
import { useThemeContext } from "../contexts/ThemeContext";

export default function SearchScreen({
  searchQuery,
  filteredData,
  selectedItems,
  setSelectedItems,
  setSelectedForDelete,
  selectedForDelete,
}) {
  const { paperTheme } = useThemeContext();
  return (
    <View style={[styles.container, { backgroundColor: paperTheme.colors.background }]}>
      {searchQuery !== "" && (
        <>
          {filteredData.length !== 0 ? (
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
          ) : (
            <View style={styles.noResultsContainer}>
              <Image
                source={require("../../assets/animations/nothing-found.gif")}
                style={{ width: 150, height: 150 }}
              />
              <Text style={[styles.noResultsText, { color: paperTheme.colors.text }]}>
                No ingredients found with name{" "}
                <Text style={styles.searchTerm}>"{searchQuery}"</Text>
              </Text>
            </View>
          )}
        </>
      )}

      {searchQuery === "" && (
        <>
          {selectedItems?.length !== 0 ? (
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
            <View style={styles.imageWrapper}>
              <ImageBackground
                source={
                  paperTheme.dark
                    ? require("../../assets/images/basket-transparet-white.png")
                    : require("../../assets/images/basket-transparent.png")
                }
                style={[
                  styles.background,
                  { backgroundColor: paperTheme.colors.background },
                ]}
                resizeMode="cover"
              />
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imageWrapper: {
    height: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchTerm: {
    fontWeight: "700",
  },
});
