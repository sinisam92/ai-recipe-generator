import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";

const AvatarComponent = ({ handleOnPress }) => {
  const { user } = useAuth();
  const { paperTheme } = useThemeContext();
  console.log("user in avatar", user);
  const emailFirstChar = user?.email.charAt(0).toUpperCase();
  const onPressFunction = () => {
    console.log("onPressFunction");
    handleOnPress();
  };
  return (
    <View style={[styles.container]}>
      <Text style={[styles.name, { color: paperTheme.colors.inversePrimary }]}>
        {user?.name ? user?.name : user?.email}
      </Text>
      <View style={styles.avatarContainer}>
        <Pressable onPress={onPressFunction}>
          {user?.picture ? (
            <Avatar.Image
              size={44}
              source={{ uri: user.picture }}
              backgroundColor={paperTheme.colors.inversePrimary}
            />
          ) : (
            <Avatar.Text
              size={44}
              label={emailFirstChar}
              color={paperTheme.colors.primary}
              style={{ backgroundColor: paperTheme.colors.inversePrimary }}
            />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  avatarContainer: {
    zIndex: 1400,
  },
  name: {
    fontSize: 12,
    fontWeight: "thin",
    marginRight: 10,
  },
});

export default AvatarComponent;
