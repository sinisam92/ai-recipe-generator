import Recipe from "../models/Recipe.js";
import jwt from "jsonwebtoken";

export const saveRecipe = async (req, res) => {
  try {
    const recipeData = req.body;

    const newRecipe = new Recipe({
      name: recipeData.recipes.recipeName,
      ingredients: recipeData.recipes.ingredients,
      instructions: recipeData.recipes.instructions,
      prepTime: recipeData.recipes.prepTime,
      cookTime: recipeData.recipes.cookTime,
      servings: recipeData.recipes.servings,
      notes: recipeData.recipes.notes,
      usersNotes: recipeData.usersNotes,
      userId: recipeData.userId,
    });
    await newRecipe.save();
    res.status(201).json({ message: "Recipe saved successfully", recipe: newRecipe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving recipe" });
  }
};

export const getUserRecipes = async (req, res) => {
  console.log("called getUserRecipes");
  console.log("req.headers", req);

  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token:", token);

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    console.log("Decoded Token:", decodedToken);

    if (!req.user.id) {
      return res.status(401).json({ message: "Invalid token structure" });
    }

    const userId = req.user.id;

    const recipes = await Recipe.find({ userId }).sort({ createdAt: -1 });
    console.log("Found recipes:", recipes);

    if (!recipes.length) {
      return res.status(404).json({ message: "No recipes found for this user" });
    }

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ message: "Server error while fetching recipes" });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  console.log("Deleting recipe", id);

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    await recipe.deleteOne();
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting recipe:", error);
    res.status(500).json({ message: "Server error while deleting recipe" });
  }
};
