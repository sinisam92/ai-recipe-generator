import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.EXPO_PUBLIC_GERMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function generateRecipes(selectedItems, newRecipes = "") {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(
      `Generate me a recipe with these ingredients: ${selectedItems
        .map((item) => item.name)
        .join(", ")}; 
      I would also need for each recipe: Prep time, Cook time, and Number of servings (property name: prepTime, cookTime, servings) and instead of telling me something like: "Okay, here is a recipe idea that combines ....", give me 3 recipes if possible but not less than 1 in a format of an array filled with objects so I can map and show all recipes, 
      so I want it in this form so I can easily parse it and display it in the app. So the response should be in this format: 
      
      [
        {
          recipeId: "Recipe id(unique number)",
          recipeName: "Recipe name",
          prepTime: "Prep time",
          cookTime: "Cook time",
          servings: "Number of servings",
          description: "Description of the recipe",
          ingredients: [
            {
              item: "Ingredient name",
              quantity: "Quantity of the ingredient",
              notes: "Notes about the ingredient",
            },
          ],
          instructions: [
            {
              step: "Step number",
              description: "Description of the step",
            },
          ],
          notes: "Notes about the recipe",
        }
      ] + ${newRecipes}`
    );

    const promptResult = result.response.text();
    return promptResult;
  } catch (error) {
    console.error("Error generating recipes:", error);
    throw error;
  }
}
