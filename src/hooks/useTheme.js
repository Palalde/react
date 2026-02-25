import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "system");

  useEffect(() => {
    // Appliquer le thème en modifiant la classe du root element
    const root = document.documentElement;

    // Déterminer si on est en mode sombre
    const systemDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    // Calculer si on est en mode sombre
    const isDark = theme === "dark" || (theme === "system" && systemDarkMode);

    // Appliquer ou retirer la classe "dark"
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  //helper pour toggler le thème
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, setTheme, toggleTheme };
}
