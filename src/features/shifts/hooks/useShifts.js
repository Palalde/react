import { useCallback } from "react";
import { useLocalStorage } from "@/hooks";
import { DEFAULT_SHIFTS } from "@/constants";
import { generateId } from "@/utils";

export default function useShifts() {
  // states
  const [shifts, setShifts] = useLocalStorage("shifts", DEFAULT_SHIFTS);

  // add
  const addShift = useCallback(
    (shiftData) => {
      setShifts((prev) => [...prev, { ...shiftData, id: generateId() }]);
    },
    [setShifts],
  );

  // update / edit
  const updateShift = useCallback(
    (shiftData) => {
      setShifts((prev) =>
        prev.map((p) => (p.id === shiftData.id ? shiftData : p)),
      );
    },
    [setShifts],
  );

  // deleteShift
  const deleteShift = useCallback(
    (shiftId) => {
      setShifts((prev) => prev.filter((p) => p.id !== shiftId));
    },
    [setShifts],
  );

  return {
    shifts,
    updateShift,
    addShift,
    deleteShift,
  };
}
