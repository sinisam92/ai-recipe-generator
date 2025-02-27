import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput, List } from "react-native-paper";
import { usePathname } from "expo-router";
import { useThemeContext } from "../contexts/ThemeContext";

const AccordionComponent = ({
  recipe,
  note,
  setNote,
  handleDeleteRecipe,
  handleSaveRecipe,
}) => {
  const pathname = usePathname();
  const { paperTheme } = useThemeContext();

  const isRecipeDisplay = pathname === "/myRecepies";
  const standardColors = { background: "#f5e5c9", text: "#000000" };
  return (
    <View style={styles.accordionContainer}>
      <List.Accordion
        title={recipe.recipeName || recipe.name}
        description={`Prep: ${recipe.prepTime} | Cook: ${recipe.cookTime} | Servings: ${recipe.servings}`}
        titleStyle={styles.accordionTitle}
        descriptionStyle={styles.accordionDescription}
        style={styles.accordion}
      >
        <View style={{ marginHorizontal: 10, backgroundColor: "#f5e5c9" }}>
          <List.Item
            title="Description"
            description={recipe.description}
            titleStyle={styles.itemTitle}
            descriptionStyle={styles.itemDescription}
            theme={{ colors: standardColors }}
          />
          <List.Accordion
            title="Ingredients"
            titleStyle={styles.accordionTitle}
            style={{ color: paperTheme.colors.primary }}
            theme={{ colors: standardColors }}
          >
            {recipe.ingredients.map((ing, i) => (
              <List.Item
                key={i}
                title={`${ing.item} - ${ing.quantity}`}
                description={ing.notes || ""}
                descriptionStyle={styles.itemDescription}
                titleStyle={styles.itemTitle}
                theme={{ colors: standardColors }}
              />
            ))}
          </List.Accordion>
          <List.Accordion
            title="Instructions"
            titleStyle={styles.accordionTitle}
            theme={{ colors: standardColors }}
          >
            {recipe.instructions.map((step, i) => (
              <List.Item
                key={i}
                titleStyle={styles.itemTitle}
                descriptionStyle={styles.itemDescription}
                title={`Step: ${step.step}`}
                description={step.description}
              />
            ))}
          </List.Accordion>
          <List.Item
            title="Notes"
            description={recipe.notes}
            titleStyle={styles.itemTitle}
            descriptionStyle={styles.itemDescription}
          />
          {isRecipeDisplay && (
            <List.Item
              title="Personal Note"
              description={recipe.usersNotes}
              titleStyle={styles.usersNotes}
              descriptionStyle={styles.usersDescription}
              theme={{ colors: standardColors }}
            />
          )}
        </View>
        {!isRecipeDisplay ? (
          <>
            <View style={{ marginHorizontal: 10 }}>
              <TextInput
                label="Add a personal note"
                mode="outlined"
                multiline
                numberOfLines={4}
                style={{ marginBottom: 10, backgroundColor: "#ffffff" }}
                value={note}
                onChangeText={(text) => setNote(recipe.recipeId, text)}
                outlineColor="#000000"
                activeOutlineColor="#000000"
                textColor="#000000"
                theme={{
                  colors: {
                    outline: "#000000",
                    primary: "#000000",
                  },
                }}
              />
            </View>

            <Button
              mode="contained"
              onPress={() => handleSaveRecipe(recipe.recipeId)}
              style={[styles.button, { backgroundColor: paperTheme.colors.success }]}
            >
              Save Recipe
            </Button>
          </>
        ) : (
          <Button
            mode="contained"
            onPress={() => handleDeleteRecipe(recipe._id)}
            style={[
              styles.button,
              { backgroundColor: paperTheme.colors.error, borderRadius: 8 },
            ]}
          >
            Delete Recipe
          </Button>
        )}
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: "#FAEBD7",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  accordion: {
    marginVertical: 5,
    backgroundColor: "#F5DEB3",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  accordionDescription: {
    fontSize: 14,
    color: "#000000",
  },

  itemTitle: {
    fontWeight: "600",
    backgroundColor: "#f5e5c9",
    color: "#000000",
  },
  usersNotes: {
    fontWeight: "600",
    backgroundColor: "#f5e5c9",
    color: "#000000",
  },
  itemDescription: {
    color: "#333",
  },
  usersDescription: {
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
    borderRadius: 8,
    margin: 10,
  },
  personalNoteText: {
    fontSize: 16,
    paddingLeft: 5,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default AccordionComponent;
