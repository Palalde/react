import { useLocalStorage } from "@/hooks";
import { DEFAULT_SHIFTS } from "@/constants";
import { generateId } from "@/utils";

export default function useShifts() {
  // states
  const [shifts, setShifts] = useLocalStorage("shifts", DEFAULT_SHIFTS);

  // add
  const addShift = (shiftData) => {
    setShifts([...shifts, { ...shiftData, id: generateId() }]);
  };

  // update / edit
  const updateShift = (shiftData) => {
    setShifts(shifts.map((s) => (s.id === shiftData.id ? shiftData : s)));
  };

  // deleteShift
  const deleteShift = (shiftId) => {
    setShifts(shifts.filter((s) => s.id !== shiftId));
  };

  // getShiftById
  const getShiftById = (shiftId) => shifts.find((s) => s.id === shiftId);

  return {
    shifts,
    updateShift,
    addShift,
    deleteShift,
    getShiftById,
  };
}
