import { DEFAULT_SHIFTS } from "@/constants";

export default function useShifts() {
  const shifts = DEFAULT_SHIFTS;

  const getShiftById = (shiftId) => shifts.find((s) => s.id === shiftId);

  return { shifts, getShiftById };
}
