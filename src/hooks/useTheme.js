import { useState, useEffect } from "react";
import { useRouter, useGlobalSearchParams } from "expo-router";

export const useTheme = () => {
  const router = useRouter();
  const { colorScheme } = useGlobalSearchParams();
  const [localColorScheme, setLocalColorScheme] = useState(colorScheme || "dark");

  useEffect(() => {
    if (colorScheme && colorScheme !== localColorScheme) {
      setLocalColorScheme(colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = () => {
    const newScheme = localColorScheme === "light" ? "dark" : "light";
    setLocalColorScheme(newScheme);
    router.setParams({ colorScheme: newScheme });
  };

  return { toggleTheme, colorScheme: localColorScheme };
};
