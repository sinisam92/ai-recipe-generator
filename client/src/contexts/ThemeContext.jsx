import { createContext, useContext, useMemo } from "react";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { adaptNavigationTheme } from "react-native-paper";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Colors } from "../constants/Colors";
import { useTheme } from "../hooks/useTheme";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const ThemeContext = createContext();

export const ThemeProviderCustom = ({ children }) => {
  const { colorScheme, toggleTheme } = useTheme();

  const paperTheme = useMemo(() => {
    return colorScheme === "dark"
      ? merge(DarkTheme, { ...MD3DarkTheme, colors: Colors.dark })
      : merge(LightTheme, { ...MD3LightTheme, colors: Colors.light });
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ paperTheme, toggleTheme }}>
      <PaperProvider theme={paperTheme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
