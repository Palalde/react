import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

type Theme = "light" | "dark" | "system";

/**
 * Custom hook to manage theme (light, dark, system)
 * @returns { theme, setTheme, toggleTheme }
 * - theme: current theme
 * - setTheme: function to set the theme
 * - toggleTheme: function to toggle between light and dark mode
 */

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "system");

  useEffect(() => {
    const root = document.documentElement;

    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const isDark = theme === "dark" || (theme === "system" && systemDarkMode);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
}
