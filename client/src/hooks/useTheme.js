import { useState, useEffect } from "react";
import { Appearance } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";

export const useTheme = () => {
  const router = useRouter();
  const { colorScheme: queryColorScheme } = useGlobalSearchParams();
  const [isMounted, setIsMounted] = useState(false);
  const systemColorScheme = Appearance.getColorScheme();

  const [localColorScheme, setLocalColorScheme] = useState(
    queryColorScheme || systemColorScheme || "light"
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (queryColorScheme && queryColorScheme !== localColorScheme) {
      setLocalColorScheme(queryColorScheme);
    }
  }, [queryColorScheme, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setLocalColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, [isMounted]);

  const toggleTheme = () => {
    const newScheme = localColorScheme === "light" ? "dark" : "light";
    setLocalColorScheme(newScheme);
    router.setParams({ colorScheme: newScheme });
  };

  return { toggleTheme, colorScheme: isMounted ? localColorScheme : "light" };
};
