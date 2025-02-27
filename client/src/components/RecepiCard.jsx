import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TextInput,
  Pressable,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const RecipeCard = ({ recipe, note, setNote, handleSaveRecipe }) => {
  const [expanded, setExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleExpand = () => {
    const toValue = expanded ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  // Animation interpolations
  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 500], // Adjust based on your content
  });

  const rotateArrow = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  // Format time string
  const formatTime = (timeStr) => {
    if (!timeStr) return "N/A";
    const match = timeStr.match(/(\d+)\s*(\w+)/);
    if (match) {
      return `${match[1]} ${match[2]}`;
    }
    return timeStr;
  };

  return (
    <View style={styles.card}>
      {/* Header - Always visible */}
      <Pressable style={styles.header} onPress={toggleExpand} activeOpacity={0.7}>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recipe.recipeName}</Text>
            <View style={styles.metaInfo}>
              <View style={styles.metaItem}>
                <Ionicons name="time-outline" size={16} color="#555" />
                <Text style={styles.metaText}>{formatTime(recipe.totalTime)}</Text>
              </View>
              <View style={styles.metaDot} />
              <View style={styles.metaItem}>
                <Ionicons name="flame-outline" size={16} color="#555" />
                <Text style={styles.metaText}>{recipe.difficulty || "Medium"}</Text>
              </View>
            </View>
          </View>
          <Animated.View style={{ transform: [{ rotate: rotateArrow }] }}>
            <Ionicons name="chevron-down" size={24} color="#555" />
          </Animated.View>
        </View>
      </Pressable>

      {/* Expandable Content */}
      <Animated.View
        style={[styles.content, { height: contentHeight, overflow: "hidden" }]}
      >
        <View style={styles.expandedContent}>
          {/* Recipe Image (placeholder) */}
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/400x250?text=Recipe+Image" }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Ingredients Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <View style={styles.ingredientsList}>
              {/* {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <View style={styles.bullet} />
              
                    <Text style={styles.ingredientText}>{ingredient.item}</Text>
                  </View>
                ))} */}
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <View key={index} style={styles.ingredientItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.ingredientText}>
                      {typeof ingredient.item === "string"
                        ? ingredient.item
                        : JSON.stringify(ingredient)}
                    </Text>
                  </View>
                ))}
            </View>
          </View>

          {/* Instructions Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            {recipe.instructions &&
              recipe.instructions.map((instruction, index) => (
                <View key={index} style={styles.instructionItem}>
                  <View style={styles.instructionNumber}>
                    <Text style={styles.instructionNumberText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.instructionText}>{instruction}</Text>
                </View>
              ))}
          </View>

          {/* Nutritional Info if available */}
          {recipe.nutritionalInfo && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Nutritional Info</Text>
              <View style={styles.nutritionGrid}>
                {Object.entries(recipe.nutritionalInfo).map(([key, value], index) => (
                  <View key={index} style={styles.nutritionItem}>
                    <Text style={styles.nutritionLabel}>{key}</Text>
                    <Text style={styles.nutritionValue}>{value}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}

          {/* Personal Notes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Notes</Text>
            <TextInput
              style={styles.noteInput}
              multiline
              placeholder="Add your notes about this recipe..."
              value={note}
              onChangeText={setNote}
            />
          </View>

          {/* Save Button */}
          <Button
            mode="contained"
            onPress={() => handleSaveRecipe(recipe.recipeId)}
            style={styles.saveButton}
            contentStyle={styles.buttonContent}
          >
            Save Recipe
          </Button>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000",
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 4,
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  metaText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#555",
  },
  metaDot: {
    width: 4,
    height: 4,
    backgroundColor: "#bbb",
    borderRadius: 2,
    marginHorizontal: 8,
  },
  content: {
    backgroundColor: "#f9f9f9",
  },
  expandedContent: {
    padding: 16,
  },
  imageContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    height: 180,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 4,
  },
  ingredientsList: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  ingredientItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#bbb",
    marginRight: 8,
  },
  ingredientText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
  instructionItem: {
    flexDirection: "row",
    marginBottom: 12,
  },
  instructionNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  instructionNumberText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#555",
  },
  instructionText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
    flex: 1,
  },
  nutritionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  nutritionItem: {
    width: "48%",
    marginBottom: 10,
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  nutritionLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#555",
    marginBottom: 4,
  },
  nutritionValue: {
    fontSize: 14,
    color: "#444",
  },
  noteInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    minHeight: 80,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },
  saveButton: {
    borderRadius: 8,
    backgroundColor: "#2196f3",
    marginTop: 10,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});

export default RecipeCard;
