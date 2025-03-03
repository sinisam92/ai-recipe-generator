import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import { Button, Modal, Portal, IconButton } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { generateRecipes } from "../utils/recipeGenerator";
import { useRecipeContext } from "../contexts/RecipeContext";
import Loading from "../components/Loading";
import AccordionComponent from "../components/AccordionComponent";
import { useThemeContext } from "../contexts/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";

export default function RecipeResult() {
  const [newRecipes, setNewRecipes] = useState([]);
  const [parsedRecipes, setParsedRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeNotes, setRecipeNotes] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  const { userToken, user } = useAuth();
  const { selectedItems, setSelectedItems, addSavedRecipe } = useRecipeContext();
  const { recipe } = useRoute().params;
  const { paperTheme } = useThemeContext();

  useEffect(() => {
    if (recipe || newRecipes) {
      const jsonRegex = /```json([\s\S]*?)```/;

      const match =
        (newRecipes.length > 0 && newRecipes.match(jsonRegex)) ||
        (recipe && recipe.match(jsonRegex));

      if (match) {
        const jsonString = match[1].trim();

        try {
          const recipesParsed = JSON.parse(jsonString);
          console.log("recipesParsed", recipesParsed);

          setParsedRecipes(recipesParsed);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    }
  }, [recipe]);

  const generateNewRecipes = async () => {
    setLoading(true);
    try {
      const newRecipes = await generateRecipes(selectedItems, " Generate 3 new Recipes.");
      setNewRecipes(newRecipes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Failed to generate new recipes:", error);
    }
  };

  const handleSetNote = (recipeId, noteText) => {
    setRecipeNotes((prevNotes) => ({
      ...prevNotes,
      [recipeId]: noteText,
    }));
  };

  const handleSaveRecipe = async (id) => {
    try {
      const recipeToSave = parsedRecipes.find((recipe) => recipe.recipeId === id);

      if (!recipeToSave) {
        Alert.alert("Error", "Recipe not found");
        return;
      }

      const recipeNote = recipeNotes[id] || "";

      const requestBody = {
        recipes: recipeToSave,
        userId: user.id,
        usersNotes: recipeNote,
      };

      console.log("Request Body:", requestBody);

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BASE_API_URL}/recipes/saveRecipe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify(requestBody),
        }
      );
      const result = await response.json();
      console.log("Save Recipe Result:", result);

      if (response.ok) {
        const savedRecipeWithId = {
          ...recipeToSave,
          _id: result.recipe._id,
          usersNotes: recipeNote,
        };
        console.log("Saved Recipe with ID:", savedRecipeWithId);

        addSavedRecipe(savedRecipeWithId);
        showSuccessModal();
      } else {
        Alert.alert(
          "Error",
          `Failed to save recipe. Status: ${response.status}. Message: ${
            result.message || "No additional information available."
          }`
        );
      }
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "An error occurred while saving the recipe.");
    }
  };

  const pickNewRecipes = () => {
    setSelectedItems([]);
    navigation.navigate("(auth)");
  };

  const showSuccessModal = () => {
    setModalVisible(true);

    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View
      style={[styles.rootContainer, { backgroundColor: paperTheme.colors.background }]}
    >
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.modalContent}>
            <IconButton
              icon="close"
              size={25}
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            />

            <Text style={styles.modalTitle}>Recipe Saved Successfully!</Text>
            <Text style={styles.modalText}>
              Check "My Recipes" page to make it again whenever you like.
            </Text>
          </View>
        </Modal>
      </Portal>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {parsedRecipes && parsedRecipes.length > 0 ? (
          parsedRecipes.map((recipe, index) => (
            <AccordionComponent
              key={recipe._id || recipe.recipeId || index}
              recipe={recipe}
              note={recipeNotes[recipe.recipeId]}
              setNote={handleSetNote}
              handleSaveRecipe={handleSaveRecipe}
            />
          ))
        ) : (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.bottomButtons}>
        <Button
          mode="contained"
          onPress={generateNewRecipes}
          style={styles.button}
          textColor="#fff"
        >
          Generate New
        </Button>
        <Button
          mode="contained"
          onPress={pickNewRecipes}
          style={styles.button}
          textColor="#fff"
        >
          Pick New Ingredients
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  accordion: {
    marginVertical: 5,
    backgroundColor: "#FFF8DC",
    borderRadius: 8,
    overflow: "hidden",
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  accordionDescription: {
    fontSize: 14,
    color: "#666",
  },
  itemTitle: {
    fontWeight: "600",
  },
  itemDescription: {
    color: "#333",
  },
  recipeText: {
    flex: 1,
    fontSize: 16,
    marginBottom: 20,
  },
  bottomButtons: {
    display: "flex",
    gap: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 10,
  },
  button: {
    backgroundColor: "teal",
    color: "#fff",
  },
  personalNoteText: {
    fontSize: 16,
    paddingLeft: 5,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 300,
  },
  loadingText: {
    fontSize: 16,
  },
  modalContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: -10,
    top: -10,
  },
  successIcon: {
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "rgb(0, 128, 0)",
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
