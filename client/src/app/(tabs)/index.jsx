import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import SearchScreen from "../../screens/SearchScreen";
import { Button } from "react-native-paper";
import { generateRecipes } from "../../utils/recipeGenerator";
import Loading from "../../components/Loading";
import { useRecipeContext } from "../../contexts/RecipeContext";
import { useAuth } from "../../contexts/AuthContext";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Index() {
  const [selectedForDelete, setSelectedForDelete] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [loading, setLoading] = useState(false);

  const { paperTheme } = useThemeContext();
  const { selectedItems, setSelectedItems, setUserRecipes, userRecipes } =
    useRecipeContext();

  const navigation = useNavigation();
  const { apiRequest } = useAuth();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    let isMounted = true;

    const loadRecipes = async () => {
      if (!isInitialLoad) return;
      try {
        const data = await apiRequest(`${process.env.EXPO_PUBLIC_BASE_API_URL}/recipes`);
        if (isMounted) {
          if (data) {
            setUserRecipes(data);
          } else {
            setUserRecipes([]);
          }
          setIsInitialLoad(false);
        }
      } catch (error) {
        if (error?.response?.status === 404) {
          setUserRecipes([]);
        } else {
          console.error("Error fetching recipes:", error);
        }
        setIsInitialLoad(false);
      }
    };

    loadRecipes();

    return () => {
      isMounted = false;
    };
  }, [isInitialLoad]);

  const handleDelete = () => {
    setSelectedItems([]);
  };

  const handleDeleteSelected = () => {
    setSelectedItems(
      selectedItems.filter((item) => !selectedForDelete.includes(item.name))
    );
    setSelectedForDelete([]);
  };

  async function handleGenerateRecipes() {
    try {
      setLoading(true);
      const recipeResult = await generateRecipes(selectedItems);

      setLoading(false);
      navigation.navigate("RecipeResult", { recipe: recipeResult });
    } catch (error) {
      setLoading(false);
      console.error("Failed to generate recipes:", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: paperTheme.colors.background }]}
    >
      <View style={[styles.contentContainer]}>
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

        {selectedItems?.length > 0 && (
          <View style={styles.generateButtonContainer}>
            <Button
              onPress={handleGenerateRecipes}
              icon={() => (
                <Image
                  source={require("../../../assets/icons/recipe.png")}
                  style={{ width: 30, height: 30 }}
                />
              )}
              buttonColor="white"
              mode="contained"
              style={[styles.button, styles.generateButton]}
            >
              <Text style={styles.generateButtonText}>Generate</Text>
            </Button>
          </View>
        )}

        {(selectedForDelete.length > 0 || selectedItems?.length > 0) && (
          <View style={styles.actionButtonsContainer}>
            {selectedForDelete.length > 0 && (
              <View style={styles.halfButtonContainer}>
                <Button
                  icon="delete"
                  buttonColor={paperTheme.colors.error}
                  mode="contained"
                  style={[styles.deleteButton, styles.button]}
                  onPress={handleDeleteSelected}
                >
                  {`Delete ${selectedForDelete.length} items`}
                </Button>
              </View>
            )}
            {selectedItems?.length > 0 && (
              <View style={styles.halfButtonContainer}>
                <Button
                  mode="contained"
                  buttonColor={paperTheme.colors.error}
                  onPressIn={() => setIsHovered(true)}
                  onPressOut={() => setIsHovered(false)}
                  onPress={handleDelete}
                  icon={() => (
                    <Image
                      source={
                        isHovered
                          ? require("../../../assets/animations/bin.gif")
                          : require("../../../assets/icons/bin.png")
                      }
                      style={{ width: 30, height: 30 }}
                    />
                  )}
                  style={[styles.deleteButton, styles.button]}
                >
                  Delete All
                </Button>
              </View>
            )}
          </View>
        )}
      </View>
      <View
        style={[
          styles.searchContainer,
          { backgroundColor: paperTheme.colors.onSecondary },
        ]}
      >
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
  buttonsContainerUpper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: 50,
    right: 0,
  },
  buttonsContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "fit-content",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
  },
  deleteButton: {
    borderRadius: 20,
    alignSelf: "flex-end",
    backgroundColor: "#FF0000",
    flex: 1,
  },
  generateButton: {
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
  },
  button: {
    margin: 10,
  },
  generateButtonContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  halfButtonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  button: {
    marginVertical: 10,
  },

  deleteButton: {
    borderRadius: 20,
  },
  generateButtonText: {
    color: "#000",
    textAlign: "center",
  },
});
