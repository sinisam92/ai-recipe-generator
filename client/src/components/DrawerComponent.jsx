import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Drawer } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { useAuth } from "../contexts/AuthContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const DrawerComponent = ({ setDrawerVisible, animatedStyle, active, setActive }) => {
  const { logout } = useAuth();
  const { paperTheme } = useThemeContext();
  const navigation = useNavigation();
  const MyDrawerItem = ({ label, ...props }) => (
    <Drawer.Item
      {...props}
      label={
        <Text
          style={{
            color: paperTheme.colors.text,
            fontSize: 20,
          }}
        >
          {label}
        </Text>
      }
    />
  );

  return (
    <View
      style={[styles.drawerContainer, { backgroundColor: paperTheme.colors.background }]}
    >
      <View style={styles.headerMenu}>
        <AntDesign
          name="close"
          size={24}
          color={paperTheme.colors.text}
          style={{ position: "absolute", right: 10, top: 10, zIndex: 999 }}
          onPress={() => setDrawerVisible(false)}
        />
        <Animated.View style={[animatedStyle]}>
          <Drawer.Section title="Menu">
            <MyDrawerItem
              label="Home"
              style={{ fontSize: 40 }}
              icon="home"
              active={active === "home"}
              onPress={() => {
                setActive("home");
                navigation.navigate("(tabs)");
                setDrawerVisible(false);
              }}
            />
            <MyDrawerItem
              label="Profile"
              icon="account"
              active={active === "profile"}
              onPress={() => {
                setActive("profile");
                navigation.navigate("ProfileScreen");
                setDrawerVisible(false);
              }}
            />
            <MyDrawerItem
              label="Logout"
              icon="logout"
              onPress={() => {
                setDrawerVisible(false);
                logout();
              }}
            />
          </Drawer.Section>
        </Animated.View>
      </View>
      <View style={styles.authorContainer}>
        <Text style={styles.authroText}>Made by: SM {new Date().getFullYear()} ©</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    top: 50,
    left: 0,
    width: "100%",
    height: "100%",
    elevation: 5,
    padding: 10,
    zIndex: 1400,
  },

  authorContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  authroText: {
    color: "#939694",
    fontSize: 14,
  },
});

export default DrawerComponent;
