import { Stack } from "expo-router";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function AuthLayout() {
  const { paperTheme } = useThemeContext();
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerStyle: { backgroundColor: paperTheme.colors.background },
      }}
    />
  );
}
