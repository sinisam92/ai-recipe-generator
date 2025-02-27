import { Router } from "express";
import {
  getUserRecipes,
  saveRecipe,
  deleteRecipe,
} from "../controllers/recipeController.js";
const router = Router();

router.post("/saveRecipe", saveRecipe);
router.get("/", getUserRecipes);
router.delete("/:id", deleteRecipe);

export default router;
