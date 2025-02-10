import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import axios from "axios";

const BASE_API_URL = "http://192.168.178.46:3000/api/"; // will be saved to .env in future

export default function MyRecepiesScreen() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await axios.get(`${BASE_API_URL}hello`);
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("Error fetching message");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Recepies</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
