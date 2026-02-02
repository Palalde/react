import { generateId } from "@/utils";

export const MOCK_EMPLOYEES = [
  {
    id: generateId(),
    name: "Donal Trump",
    color: "#3B82F6",
    weeklyMinutes: 2160, // 36h00
    skills: ["balance", "rayonnage"],
  },
  {
    id: generateId(),
    name: "Joe Biden",
    color: "#10B981",
    weeklyMinutes: 1200, // 20h00
    skills: ["facing", "inventaire"],
  },
  {
    id: generateId(),
    name: "Emanuel Macron",
    color: "#EF4444",
    weeklyMinutes: 1845, // 30h45
    skills: ["reception", "balance"],
  },
];
