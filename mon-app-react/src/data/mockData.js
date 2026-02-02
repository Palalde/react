import { generateId } from "@/utils";

export const MOCK_EMPLOYEES = [
  {
    id: generateId(),
    name: "Donal Trump",
    color: "#3B82F6",
    weeklyHours: 36.45,
    skills: ["balance", "rayonnage"],
  },
  {
    id: generateId(),
    name: "Joe Biden",
    color: "#10B981",
    weeklyHours: 20,
    skills: ["facing", "inventaire"],
  },
  {
    id: generateId(),
    name: "Emanuel Macron",
    color: "#EF4444",
    weeklyHours: 30,
    skills: ["reception", "balance"],
  },
];
