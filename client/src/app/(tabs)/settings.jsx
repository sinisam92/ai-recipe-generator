import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useThemeContext } from "../../contexts/ThemeContext";

const Settings = () => {
  const { paperTheme, toggleTheme } = useThemeContext();

  return (
    <View
      style={[
        styles.container,

        {
          backgroundColor: paperTheme.colors.background,
        },
      ]}
    >
      <Text variant="headlineSmall" style={{ marginVertical: 16 }}>
        Settings
      </Text>
      <Button
        icon="repeat"
        mode="outlined"
        onPress={toggleTheme}
        textColor={paperTheme.colors.inversePrimary}
      >
        {paperTheme.dark ? "Switch to Light" : "Switch to Dark"}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 16,
  },
});
export default Settings;
