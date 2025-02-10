import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

const BASE_API_URL = "http://192.168.178.46:3000/api";

export default function MyRecepies() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/hello`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response as JSON
      const data = await response.json();
      console.log("response", data);

      setMessage(data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
      setMessage("Error fetching message");
    }
  };

  useEffect(() => {
    fetchMessage();
  }, []);

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
