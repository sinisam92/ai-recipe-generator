import { Text, View, StyleSheet, FlatList } from "react-native";
import SearchBar from "../components/SearchBar";
import { Ionicons, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { Card } from "react-native-paper";
// import Ingredients from "../components/Ingredients";
import { ingredients } from "../data/ingrediants";

export default function PickScreen() {
  const categories = Object.keys(ingredients);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navigation}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="black"
          style={styles.icon}
          onPress={() => router.back()}
        />
        <SearchBar style={styles.searchBar} />
        <Feather
          name="menu"
          size={24}
          color="black"
          style={styles.icon}
          onPress={() => console.log("Hamburger Pressed")}
        />
      </View>
      <View style={styles.contentContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.cardWrapper}>
              <Card style={styles.card}>
                <Card.Cover
                  source={{ uri: ingredients[item].image }}
                  style={styles.image}
                />
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>{ingredients[item].name}</Text>
                </View>
              </Card>
            </View>
          )}
        />

        {/* <Ingredients /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
    width: "100%",
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  cardWrapper: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: 150,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    width: "100%",
    flexWrap: "wrap",
    textTransform: "capitalize",
    color: "#ffffff",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    padding: 10,
  },
});
