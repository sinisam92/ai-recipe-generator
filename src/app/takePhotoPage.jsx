import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

export default function TakePhotoPage() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Take Photo Page is under construction and it will be available in next release!
        </Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  text: {
    color: "red",
    width: "80%",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
