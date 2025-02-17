import { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/SearchBar";
import SearchScreen from "../../screens/SearchScreen";
import { Button, Drawer } from "react-native-paper";
import { useAuth } from "../../../contexts/AuthContext";
import AvatarComponent from "../../components/AvatarComponent";
import { AntDesign } from "@expo/vector-icons";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useTheme } from "../../hooks/useTheme";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";

export default function Index() {
  const [selectedForDelete, setSelectedForDelete] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [active, setActive] = useState("home");

  const { user, logout } = useAuth();
  const { colorScheme } = useTheme();
  console.log("colorScheme", colorScheme);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleDelete = () => {
    setSelectedItems([]);
  };

  const handleDeleteSelected = () => {
    setSelectedItems(
      selectedItems.filter((item) => !selectedForDelete.includes(item.name))
    );
    setSelectedForDelete([]);
  };

  const apiKey = process.env.EXPO_PUBLIC_GERMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(
      `Generate me a recepie with this ingredients: ${selectedItems
        .map((item) => item.name)
        .join(", ")}`
    );
    console.log("result", result);

    console.log("tytytytytytyty", result.response.text());
  }

  const MyDrawerItem = ({ label, ...props }) => (
    <Drawer.Item
      {...props}
      label={
        <Text
          style={{
            color: colorScheme === "light" ? "#000" : "#fff",
            fontSize: 20,
          }}
        >
          {label}
        </Text>
      }
    />
  );

  const drawerWidth = 410;
  // Start with the drawer off-screen (to the left)
  const translateX = useSharedValue(-drawerWidth);

  useEffect(() => {
    if (drawerVisible) {
      // When opening, mount the drawer and animate in.
      setIsDrawerMounted(true);
      translateX.value = withTiming(0, { duration: 300 });
    } else {
      // When closing, animate out then unmount.
      translateX.value = withTiming(-drawerWidth, { duration: 300 }, () => {
        runOnJS(setIsDrawerMounted)(false);
      });
    }
  }, [drawerVisible, translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setDrawerVisible(true)}
          style={styles.avatarWrapper}
        >
          <AvatarComponent />
        </TouchableOpacity>
      </View>
      {/* drawer */}
      {isDrawerMounted && (
        <View
          style={[
            styles.drawerContainer,
            { backgroundColor: colorScheme === "light" ? "#fff" : "#000" },
          ]}
        >
          <View style={styles.headerMenu}>
            <AntDesign
              name="close"
              size={24}
              color={colorScheme === "dark" ? "#fff" : "#000"}
              style={{ position: "absolute", right: 10, top: 10, zIndex: 999 }}
              onPress={() => setDrawerVisible(false)}
            />
            <Animated.View style={[animatedStyle]}>
              <Drawer.Section title="Menu" style={styles.drawerSection}>
                <MyDrawerItem
                  label="Home"
                  style={{ fontSize: 40 }}
                  icon="home"
                  active={active === "home"}
                  onPress={() => setActive("home")}
                />
                <MyDrawerItem
                  label="Profile"
                  icon="account"
                  active={active === "profile"}
                  onPress={() => setActive("profile")}
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
            <Text style={styles.authroText}>Made by: SM</Text>
          </View>
        </View>
      )}
      <View style={styles.contentContainer}>
        {/* <Button mode="contained" onPress={logout} style={styles.button}>
          Logout
        </Button> */}
        <SearchScreen
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
          setSelectedItems={setSelectedItems}
          selectedItems={selectedItems}
          setSelectedForDelete={setSelectedForDelete}
          selectedForDelete={selectedForDelete}
        />
        <View style={styles.buttonsContainerUpper}>
          {selectedItems.length > 0 && (
            <Button
              onPress={() => run()}
              icon={() => (
                <Image
                  source={require("../../../assets/animations/recipe.gif")}
                  style={{ width: 30, height: 30 }}
                />
              )}
              buttonColor="white"
              mode="contained"
              style={[styles.button, styles.generateButton]}
            >
              <Text style={styles.generateButtonText}>Generate</Text>
            </Button>
          )}
        </View>
        <View style={styles.buttonsContainer}>
          {selectedForDelete.length > 0 && (
            <Button
              icon="delete"
              buttonColor="red"
              mode="contained"
              style={[styles.deleteButton, styles.button]}
              onPress={handleDeleteSelected}
            >
              {`Delete ${selectedForDelete.length} items`}
            </Button>
          )}
          {selectedItems.length > 0 && (
            <Button
              mode="contained"
              buttonColor="red"
              onPressIn={() => setIsHovered(true)}
              onPressOut={() => setIsHovered(false)}
              onPress={handleDelete}
              icon={() => (
                <Image
                  source={
                    isHovered
                      ? require("../../../assets/animations/bin_cc99.gif") // GIF when hovered
                      : require("../../../assets/icons/bin.png") // Static image
                  }
                  style={{ width: 30, height: 30 }}
                />
              )}
              style={[styles.deleteButton, styles.button]}
            >
              Delete All
            </Button>
          )}
        </View>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setFilteredData={setFilteredData}
          filteredData={filteredData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  contentContainer: {
    flex: 1,
    width: "100%",
    zIndex: 99,
  },
  searchContainer: {
    width: "100%",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#ffffff",
    zIndex: 999,
  },
  buttonsContainerUpper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: 50,
    right: 0,
  },
  buttonsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "fit-content",
    zIndex: 999,
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
  },
  deleteButton: {
    borderRadius: 20,
    marginLeft: 10,
    alignSelf: "flex-end",
    backgroundColor: "#FF0000",
    flex: 1,
  },
  generateButton: {
    borderRadius: 20,
    marginLeft: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
  generateButtonText: {
    color: "#000",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    margin: 10,
  },
  header: {
    position: "relative",
    top: 0,
    right: 0,
    padding: 20,
    width: "100%",
    zIndex: 999,
  },
  avatarWrapper: {
    position: "absolute",
    right: 30,
    top: 0,
  },
  drawerContainer: {
    position: "absolute",
    top: 70,
    left: 0,
    width: "100%",
    height: "100%",
    elevation: 5,
    padding: 10,
    zIndex: 1200,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 250, // covers the rest of the screen to the right of the drawer
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1201,
  },
  authorContainer: {
    width: "100%",
    alignItems: "center",
  },
  authroText: {
    color: "#939694",
    fontSize: 12,
  },
});
