import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import SearchScreen from "../../screens/SearchScreen";
import { Button } from "react-native-paper";
import { useAuth } from "../../../contexts/AuthContext";

export default function Index() {
  const [selectedForDelete, setSelectedForDelete] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const { user, logout } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogout = async () => {
    try {
      await fetch("http://192.168.178.46:3000/logout");
      await logout();
      navigation.replace("Auth");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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
        <Text style={styles.title}>Welcome to the Main Screen</Text>
        <Button mode="contained" onPress={logout} style={styles.button}>
          Logout
        </Button>
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
    width: "fit-content",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  deleteButton: {
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  button: {
    margin: 10,
  },
});
