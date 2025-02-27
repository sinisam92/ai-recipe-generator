import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Please log in to view your profile</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.label}>Account Created:</Text>
        <Text style={styles.value}>{user.createdAtFormatted || "Not available"}</Text>
      </View>

      {/* For debugging */}
      <Text style={styles.debug}>Raw createdAt: {user.createdAt || "Not available"}</Text>
      <Text style={styles.debug}>User ID: {user.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    width: 120,
  },
  value: {
    flex: 1,
  },
  debug: {
    fontSize: 12,
    color: "#666",
    marginTop: 20,
  },
});

export default UserProfile;
