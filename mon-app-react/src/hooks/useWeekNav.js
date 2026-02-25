import { useState, useCallback } from "react";
// calculer la date du lundi de la semaine courante à partir d'une date donnée
function getMondayISO(date) {
  const dayOfWeek = date.getDay();
  const monday = new Date(date);
  monday.setDate(date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
  return monday.toISOString().split("T")[0];
}

function addWeeks(isoString, weeks) {
  const date = new Date(isoString);
  date.setDate(date.getDate() + weeks * 7);
  return date.toISOString().split("T")[0];
}

export default function useWeekNav() {
  // initialiser le state avec la semaine courante (string ISO du lundi)
  const [currentWeek, setCurrentWeek] = useState(getMondayISO(new Date()));

  // goNext → avancer d'une semaine
  const goNext = useCallback(() => {
    setCurrentWeek((prev) => addWeeks(prev, 1));
  }, [setCurrentWeek]);

  // goPrev → reculer d'une semaine
  const goPrev = useCallback(() => {
    setCurrentWeek((prev) => addWeeks(prev, -1));
  }, [setCurrentWeek]);

  // goToday → revenir à la semaine actuelle
  const goToday = useCallback(() => {
    setCurrentWeek(getMondayISO(new Date()));
  }, [setCurrentWeek]);

  return { currentWeek, goNext, goPrev, goToday };
}
