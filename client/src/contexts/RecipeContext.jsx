import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "./AuthContext";

const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [recipeData, setRecipeData] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const { userToken } = useAuth();

  useEffect(() => {
    if (userToken) {
      console.log("User token changed, fetching saved recipes");
      fetchSavedRecipes();
    }
  }, [userToken]);

  const fetchSavedRecipes = async () => {
    if (!userToken) return;

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_BASE_API_URL}/recipes`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSavedRecipes(data);
        setUserRecipes(data);
      } else {
        console.error("Failed to fetch saved recipes");
      }
    } catch (error) {
      console.log("Error fetching saved recipes:", error);
      console.error("Error fetching saved recipes:", error);
    }
  };

  const addSavedRecipe = (recipe) => {
    console.log("Adding recipe to saved recipes:", recipe);
    setSavedRecipes((prevRecipes) => {
      const newRecipes = [...prevRecipes];

      const exists = newRecipes.some(
        (r) => r._id === recipe._id || r.recipeId === recipe.recipeId
      );

      if (exists) {
        const updatedRecipes = newRecipes.map((r) =>
          r._id === recipe._id || r.recipeId === recipe.recipeId ? { ...r, ...recipe } : r
        );
        console.log("Updated existing recipe in state");
        return updatedRecipes;
      } else {
        console.log("Added new recipe to state");
        return [recipe, ...newRecipes];
      }
    });

    setTimeout(() => {
      fetchSavedRecipes();
    }, 500);
  };

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const storedRecipes = await AsyncStorage.getItem("userRecipes");
        if (storedRecipes) setUserRecipes(JSON.parse(storedRecipes));
      } catch (error) {
        console.error("Error loading recipes from storage:", error);
      }
    };
    loadRecipes();
  }, []);

  const saveRecipes = async (recipes) => {
    if (!recipes || !Array.isArray(recipes)) {
      console.error("Attempted to save invalid recipes:", recipes);
      return;
    }

    try {
      console.log("Saving recipes to storage:", recipes);

      await AsyncStorage.setItem("userRecipes", JSON.stringify(recipes));
      setUserRecipes(recipes);
    } catch (error) {
      console.error("Error saving recipes to storage:", error);
    }
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_BASE_API_URL}/recipes/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete recipe from database.");
      }

      const updatedRecipes = userRecipes.filter((recipe) => recipe._id !== id);
      setUserRecipes(updatedRecipes);

      console.log("Recipe deleted successfully!");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipeData,
        setRecipeData,
        selectedItems,
        setSelectedItems,
        userRecipes,
        setUserRecipes: saveRecipes,
        deleteRecipe,
        savedRecipes,
        setSavedRecipes,
        fetchSavedRecipes,
        addSavedRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipeContext() {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error("useRecipeContext must be used within a RecipeProvider");
  }
  return context;
}
