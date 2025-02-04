import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import SearchScreen from "../../components/SearchScreen";
import { Button } from "react-native-paper";

export default function Index() {
  const [selectedForDelete, setSelectedForDelete] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  console.log("selectedForDelete", selectedForDelete?.length);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleDelete = () => {
    setSelectedItems([]);
  };

  const handleDeleteSelected = () => {
    setSelectedItems(
      selectedItems.filter((item) => !selectedForDelete.includes(item.name))
    );
    setSelectedForDelete([]);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <SearchScreen
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          setSelectedForDelete={setSelectedForDelete}
          selectedForDelete={selectedForDelete}
        />

        <View style={styles.buttonsContainer}>
          {selectedForDelete.length > 0 && (
            <Button
              icon="delete"
              buttonColor="red"
              mode="contained"
              style={styles.deleteButton}
              onPress={handleDeleteSelected}
            >
              {`Delete ${selectedForDelete.length} items`}
            </Button>
          )}
          {selectedItems.length > 0 && (
            <Button
              icon="delete"
              buttonColor="red"
              mode="contained"
              style={styles.deleteButton}
              onPress={handleDelete}
            >
              Delete All
            </Button>
          )}
        </View>
      </View>

      <View style={styles.searchContainer}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  contentContainer: {
    flex: 1,
    width: "100%",
    zIndex: 99,
  },
  searchContainer: {
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#ffffff",
    zIndex: 999,
  },
  buttonsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
  },
  deleteButton: {
    borderRadius: 20,
    alignSelf: "flex-end",
  },
});
