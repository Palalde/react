import { Assignment, Shift } from "@/types";
import { timeToMinutes } from "@/utils";

const NOON = 12 * 60;

export function getEmployeeHours(
  employeeId: string,
  assignments: Assignment[],
  shifts: Shift[],
): { total: number; am: number; pm: number } {
  const shiftMap = new Map(shifts.map((shift) => [shift.id, shift]));
  const result = { total: 0, am: 0, pm: 0 };

  for (const { employeeId: assignedEmployeeId, shiftId } of assignments) {
    if (assignedEmployeeId !== employeeId) continue;

    const shift = shiftMap.get(shiftId);
    if (!shift) continue;

    const start = timeToMinutes(shift.startTime);
    const end = timeToMinutes(shift.endTime);

    let am = 0;
    let pm = 0;

    if (shift.type === "am") {
      am = end - start;
    } else if (shift.type === "pm") {
      pm = end - start;
    } else if (shift.type === "full") {
      am = NOON - start;
      pm = end - NOON;
    } else if (shift.type === "split") {
      am = timeToMinutes(shift.breakStart) - start;
      pm = end - timeToMinutes(shift.breakEnd);
    }

    result.total += am + pm;
    result.am += am;
    result.pm += pm;
  }

  return result;
}