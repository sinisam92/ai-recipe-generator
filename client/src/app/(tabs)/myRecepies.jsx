import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import { useRecipeContext } from "../../contexts/RecipeContext";
import AccordionComponent from "../../components/AccordionComponent";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../contexts/AuthContext";

export default function MyRecepies() {
  const [savedUsersReipes, setSavedUsersReipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userRecipes, setUserRecipes, deleteRecipe, fetchSavedRecipes, savedRecipes } =
    useRecipeContext();
  const { paperTheme } = useThemeContext();
  const { accessToken } = useAuth();

  useEffect(() => {
    console.log("userRecipes effect running");

    const loadRecipes = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Token being used:", accessToken);

        try {
          const cachedRecipes = await AsyncStorage.getItem("userRecipes");
          if (cachedRecipes) {
            const parsedRecipes = JSON.parse(cachedRecipes);
            setUserRecipes(parsedRecipes);
            console.log("Loaded cached recipes:", parsedRecipes.length);
          }
        } catch (cacheError) {
          console.log("Error loading cached recipes:", cacheError);
        }

        if (!accessToken) {
          throw new Error("No authentication token available");
        }

        const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_API_URL}/recipes`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.log("Error response:", errorText);
          throw new Error(
            `Server error: ${response.status} - ${errorText || "Unknown error"}`
          );
        }

        const data = await response.json();
        setUserRecipes(data);
        setSavedUsersReipes(data);
        await AsyncStorage.setItem("userRecipes", JSON.stringify(data));
        console.log("Recipes fetched from database:", data.length);

        console.log("All recipes fetched successfully");
      } catch (error) {
        console.log("Error fetching recipes:", error.message);
        setError(`Failed to load recipes: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, [accessToken]);

  const handleDeleteRecipe = async (id) => {
    try {
      const updatedRecipes = userRecipes.filter((recipe) => recipe._id !== id);
      setUserRecipes(updatedRecipes);

      await AsyncStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));

      await deleteRecipe(id);
    } catch (error) {
      console.error("Failed to delete recipe:", error);
    }
  };

  if (loading && userRecipes.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading your recipes...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: paperTheme.colors.background }}
      >
        <View
          style={[styles.container, { backgroundColor: paperTheme.colors.background }]}
        >
          {loading && (
            <ActivityIndicator size="small" color="#007bff" style={styles.miniLoader} />
          )}

          {userRecipes.length > 0 ? (
            userRecipes.map((recipe) => {
              return (
                <AccordionComponent
                  recipe={recipe}
                  key={recipe._id}
                  handleDeleteRecipe={handleDeleteRecipe}
                />
              );
            })
          ) : (
            <View style={styles.noRecipes}>
              <Image
                source={require("../../../assets/animations/Animation - 1740587705821.gif")}
                style={{ width: 150, height: 150 }}
              />
              <Text style={[styles.noRecipesText, { color: paperTheme.colors.text }]}>
                Ooops! You do not have any saved recipes.
              </Text>
              <Text style={[styles.noRecipesText, { color: paperTheme.colors.text }]}>
                Start by creating a{" "}
                <Link href="/" style={styles.link}>
                  {" "}
                  new recipe
                </Link>
                .
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    height: "100%",
  },
  noRecipes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  noRecipesText: {
    fontSize: 18,
  },
  link: {
    color: "#007bff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  errorContainer: {
    padding: 15,
    backgroundColor: "#ffdddd",
    borderRadius: 5,
    marginBottom: 15,
  },
  errorText: {
    color: "#ff0000",
  },
  miniLoader: {
    marginVertical: 10,
  },
});
