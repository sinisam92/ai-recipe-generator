import { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ingredients } from "../data/ingrediants";
import ItemCard from "../components/ItemCard";
import MainNavigation from "../components/MainNavigation";
import { useRoute } from "@react-navigation/native";

export default function PickScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = Object.keys(ingredients);
  const route = useRoute();
  const colorScheme = Object.values(route.params).join("");

  return (
    <View style={styles.mainContainer}>
      <MainNavigation colorScheme={colorScheme} />
      <View style={styles.contentContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          numColumns={2}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              ingredients={ingredients}
              setSelectedCategory={setSelectedCategory}
            />
          )}
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
    padding: 10,
  },
});
