import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../../contexts/AuthContext";

const AvatarComponent = () => {
  const { user } = useAuth();
  console.log("user in avatar", user);
  const emailFirstChar = user?.email.charAt(0).toUpperCase();
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {user?.picture ? (
          <Avatar.Image size={44} source={{ uri: user.picture }} />
        ) : (
          <Avatar.Text size={44} label={emailFirstChar} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 70,
    marginBottom: 20,
    width: "100%",
    // right: 0,
  },
  avatarContainer: {
    position: "absolute",
    right: 30,
    top: 0,
    zIndex: 999,
  },
});

export default AvatarComponent;
