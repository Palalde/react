import { Employee } from "@/types";

// palettes de couleur predefinis
const DEFAULT_COLORS: string[] = [
  "#6366F1", // Indigo
  "#10B981", // Emerald
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#14B8A6", // Teal
  "#F97316", // Orange
  "#06B6D4", // Cyan
  "#84CC16", // Lime
  "#A855F7", // Purple
  "#F43F5E", // Rose
];

// trouve une couleur disponible pour un nouvel employé en vérifiant les couleurs déjà utilisées
export function getAvailableColor(employees: Employee[] = []): string {
  // Récupère toutes les couleurs déjà utilisées
  const usedColors = new Set(employees.map((emp) => emp.color?.toUpperCase()));

  // Trouve la première couleur disponible
  const availableColor = DEFAULT_COLORS.find(
    (color) => !usedColors.has(color.toUpperCase()),
  );

  // Si toutes les couleurs sont prises, retourne une couleur aléatoire de la palette
  return (
    availableColor ||
    DEFAULT_COLORS[Math.floor(Math.random() * DEFAULT_COLORS.length)]
  );
}
