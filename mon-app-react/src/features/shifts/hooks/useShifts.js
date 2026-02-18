import { useLocalStorage } from "@/hooks";
import { DEFAULT_SHIFTS } from "@/constants";
import { timeToMinutes, generateId } from "@/utils";

export default function useShifts() {
  // states
  const [shifts, setShifts] = useLocalStorage("shifts", DEFAULT_SHIFTS);

  // add
  const addShift = (shiftData) => {
    // passer les heures (string) en minutes (nombres)
    const startMn = timeToMinutes(shiftData.startTime);
    const endMn = timeToMinutes(shiftData.endTime);

    // calculer la diff et passer en heurs
    const hours = (endMn - startMn) / 60;

    // creer le shifts avec shiftData et hours
    setShifts([...shifts, { ...shiftData, hours: hours, id: generateId() }]);
  };

  // update / edit
  const updateShift = (shiftData) => {
    // passer les heures (string) en minutes (nombres)
    const startMn = timeToMinutes(shiftData.startTime);
    const endMn = timeToMinutes(shiftData.endTime);

    // calculer la diff et passer en heurs
    const hours = (endMn - startMn) / 60;

    // l'objet shiftData avec hours recalculer
    const updatedShift = { ...shiftData, hours: hours };

    // remplace le shift dans le state ou en créée un nouveau
    setShifts(shifts.map((s) => (s.id === updatedShift.id ? updatedShift : s)));
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
