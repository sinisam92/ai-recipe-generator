import { Schema, model } from "mongoose";

const RecipeSchema = new Schema(
  {
    name: String,
    description: String,
    prepTime: String,
    cookTime: String,
    servings: String,
    ingredients: [
      {
        item: String,
        quantity: String,
        notes: String,
      },
    ],
    instructions: [
      {
        step: String,
        description: String,
      },
    ],
    notes: String,
    usersNotes: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default model("Recipe", RecipeSchema);
