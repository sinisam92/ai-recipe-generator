import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Avatar, Text, Card, Divider } from "react-native-paper";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";
import DebugUserInfo from "../components/DebugUserInfo";

const ProfileScreen = () => {
  const { user } = useAuth();
  const { paperTheme } = useThemeContext();
  console.log("user in profile", user);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: paperTheme.colors.background }]}
    >
      <View style={styles.header}>
        <Avatar.Image
          size={120}
          source={
            user?.picture
              ? { uri: user.picture }
              : require("../../assets/icons/default-avatar.png") // Make sure to add a default avatar image
          }
        />
        <Text
          variant="headlineMedium"
          style={[styles.name, { color: paperTheme.colors.text }]}
        >
          {user?.name || user?.email}
        </Text>
      </View>

      <Card style={[styles.card, { backgroundColor: paperTheme.colors.surface }]}>
        <Card.Content>
          <View style={styles.infoRow}>
            <Text
              variant="labelLarge"
              style={{ color: paperTheme.colors.inversePrimary }}
            >
              Email
            </Text>
            <Text variant="bodyLarge" style={{ color: paperTheme.colors.text }}>
              {user?.email || "Not provided"}
            </Text>
          </View>

          {/* <Divider style={styles.divider} /> */}

          {/* <View style={styles.infoRow}>
            <Text
              variant="labelLarge"
              style={{ color: paperTheme.colors.inversePrimary }}
            >
              Member Since
            </Text>
            <Text variant="bodyLarge" style={{ color: paperTheme.colors.text }}>
              {user?.metadata?.creationTime
                ? new Date(user.metadata.creationTime).toLocaleDateString()
                : "Not available"}
            </Text>
          </View>

          <Divider style={styles.divider} />

          <View style={styles.infoRow}>
            <Text
              variant="labelLarge"
              style={{ color: paperTheme.colors.inversePrimary }}
            >
              Last Login
            </Text>
            <Text variant="bodyLarge" style={{ color: paperTheme.colors.text }}>
              {user?.metadata?.lastSignInTime
                ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                : "Not available"}
            </Text>
          </View> */}
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
  },
  name: {
    marginTop: 15,
    fontWeight: "bold",
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  infoRow: {
    marginVertical: 8,
  },
  divider: {
    marginVertical: 12,
  },
});

export default ProfileScreen;
