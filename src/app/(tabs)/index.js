import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/pickPage" style={styles.cardWrapperUpper}>
        <Card style={[styles.card, { backgroundColor: "skyblue" }]}>
          <Text style={styles.text}>Pick ingredients</Text>
        </Card>
      </Link>
      <Link href="/settings">
        <Card style={[styles.card, { backgroundColor: "lightcoral" }]}>
          <Text style={styles.text}>Take a photo (beta)</Text>
        </Card>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "95%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 4 }, // iOS shadow position
    shadowOpacity: 0.1, // iOS shadow opacity
    shadowRadius: 6, // iOS shadow blur
  },
  text: {
    color: "black",
    fontSize: 18,
  },
  cardWrapperUpper: {
    marginBottom: 10,
  },
});
