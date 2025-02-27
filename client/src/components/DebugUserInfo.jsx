import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAuth } from "../contexts/AuthContext";

export const DebugUserInfo = () => {
  const { user } = useAuth();

  if (!__DEV__) return null; // Only show in development

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debug User Information</Text>
      <Text style={styles.subtitle}>Raw user object:</Text>
      <View style={styles.infoBox}>
        <Text style={styles.code}>{JSON.stringify(user, null, 2)}</Text>
      </View>

      <Text style={styles.subtitle}>Individual fields:</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{user?.id || "null"}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user?.email || "null"}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Created At:</Text>
        <Text style={styles.value}>{user?.createdAt || "null"}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Formatted Date:</Text>
        <Text style={styles.value}>{user?.createdAtFormatted || "null"}</Text>
      </View>

      <Text style={styles.subtitle}>Type checks:</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>user is null:</Text>
        <Text style={styles.value}>{String(user === null)}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>createdAt type:</Text>
        <Text style={styles.value}>
          {user?.createdAt ? typeof user.createdAt : "N/A"}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  infoBox: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
  },
  code: {
    fontFamily: "monospace",
    fontSize: 12,
  },
  fieldContainer: {
    flexDirection: "row",
    marginVertical: 2,
  },
  label: {
    fontWeight: "bold",
    width: 120,
  },
  value: {
    flex: 1,
  },
});

export default DebugUserInfo;
