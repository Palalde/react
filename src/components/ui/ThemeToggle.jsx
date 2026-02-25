import { useTheme } from "@/hooks";
import { Button } from "@/components/ui";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌞" : "🌜"}
    </Button>
  );
}
