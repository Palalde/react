/**
 * Convertit des minutes totales en heures et minutes
 * @param {number} totalMinutes - Minutes totales (ex: 2145)
 * @returns {{ hours: number, minutes: number }} - Objet { hours: 35, minutes: 45 }
 */
export function minutesToHoursMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}

/**
 * Convertit des heures et minutes en minutes totales
 * @param {number} hours - Heures (ex: 35)
 * @param {number} minutes - Minutes (ex: 45)
 * @returns {number} - Minutes totales (ex: 2145)
 */
export function hoursMinutesToMinutes(hours, minutes) {
  return hours * 60 + minutes;
}

/**
 * Formate des minutes totales en string lisible "35h45" ou "35h"
 * @param {number} totalMinutes - Minutes totales (ex: 2145)
 * @returns {string} - Format "35h45" ou "35h" (si minutes = 0)
 */
export function formatMinutesToDisplay(totalMinutes) {
  const { hours, minutes } = minutesToHoursMinutes(totalMinutes);
  if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h${minutes.toString().padStart(2, "0")}`;
}

export function getEmployeeHours(employeeId, assignments, shifts) {
  // Filtrer les assignations de cet employé
  const employeeAssignments = assignments.filter(
    (a) => a.employeeId === employeeId,
  );

  // Calculer le total des minutes travaillées
  const total = employeeAssignments.reduce((acc, assignment) => {
    const shift = shifts.find((s) => assignment.shiftId === s.id);
    return acc + (shift?.hours ?? 0) * 60;
  }, 0);

  return total;
}
