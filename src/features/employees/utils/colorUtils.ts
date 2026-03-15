import { Employee } from "@/types";

// Color palette
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

// return the first available color or a random one if all are used
export default function getAvailableColor(employees: Employee[] = []): string {
  const usedColors = new Set(employees.map((emp) => emp.color?.toUpperCase()));

  const availableColor = DEFAULT_COLORS.find(
    (color) => !usedColors.has(color.toUpperCase()),
  );

  return (
    availableColor ||
    DEFAULT_COLORS[Math.floor(Math.random() * DEFAULT_COLORS.length)]
  );
}
