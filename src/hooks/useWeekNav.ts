import { useState, useCallback } from "react";
import type { ISODateString } from "@/types";
// calculate the ISO string of the Monday of the week for a given date
function getMondayISO(date: Date): ISODateString {
  const dayOfWeek = date.getDay();
  const monday = new Date(date);
  monday.setDate(date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));
  return monday.toISOString().split("T")[0] as ISODateString;
}

// add a number of weeks to an ISO date string and return the new ISO date string
function addWeeks(isoString: ISODateString, weeks: number): ISODateString {
  const date = new Date(isoString);
  date.setDate(date.getDate() + weeks * 7);
  return date.toISOString().split("T")[0] as ISODateString;
}

/**
 * Custom hook to manage week navigation
 * @returns { currentWeek, goNext, goPrev, goToday }
 * - currentWeek: ISO string of the Monday of the current week
 * - goNext: function to go to the next week
 * - goPrev: function to go to the previous week
 * - goToday: function to go to the current week
 */

export default function useWeekNav() {
  const [currentWeek, setCurrentWeek] = useState<ISODateString>(
    getMondayISO(new Date()),
  );

  const goNext = useCallback(() => {
    setCurrentWeek((prev) => addWeeks(prev, 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentWeek((prev) => addWeeks(prev, -1));
  }, []);

  const goToday = useCallback(() => {
    setCurrentWeek(getMondayISO(new Date()));
  }, []);

  return { currentWeek, goNext, goPrev, goToday };
}
