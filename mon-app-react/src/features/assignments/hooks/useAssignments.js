import { useLocalStorage } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";
import { DEFAULT_SHIFTS } from "@/constants";

export default function useAssignments() {
  const [assignments, setAssignments] = useLocalStorage("assignments", []);

  // Ajouter une assignation (id généré automatiquement)
  const addAssignment = (assignmentData) => {
    setAssignments([...assignments, { ...assignmentData, id: generateId() }]);
  };

  // Modifier une assignation existante (avec gestion des conflits)
  const updateAssignment = (assignmentData) => {
    // 1. Trouver l'assignation actuelle pour comparer
    const currentAssignment = assignments.find(
      (a) => a.id === assignmentData.id,
    );

    // Si même shift qu'avant → ne rien faire
    if (assignmentData.shiftId === currentAssignment.shiftId) return;

    // 2. Map des conflits entre types de shifts
    // split conflicte avec tout (comme journée) car il occupe AM + PM
    const conflictMap = {
      matin: ["journee", "matin", "coupe"],
      aprem: ["journee", "aprem", "coupe"],
      journee: ["matin", "aprem", "coupe"],
      coupe: ["matin", "aprem", "journee", "coupe"],
    };

    // 3. Collecter les ids des assignations conflictuelles
    //    = même employé, même jour, shift qui chevauche, mais PAS celle qu'on édite
    const conflictingIds = assignments
      .filter(
        (a) =>
          a.id !== assignmentData.id &&
          a.employeeId === assignmentData.employeeId &&
          a.day === assignmentData.day &&
          conflictMap[assignmentData.shiftId]?.includes(a.shiftId),
      )
      .map((a) => a.id);

    // 4. En une seule opération : supprimer les conflits + mettre à jour l'assignation
    setAssignments(
      assignments
        .filter((a) => !conflictingIds.includes(a.id))
        .map((a) => (a.id === assignmentData.id ? assignmentData : a)),
    );
  };

  // Supprimer une assignation par id
  const deleteAssignment = (assignmentId) =>
    setAssignments(assignments.filter((a) => a.id !== assignmentId));

  // Supprimer toutes les assignations d'un employé
  const deleteAssignmentsByEmployee = (employeeId) =>
    setAssignments(assignments.filter((a) => a.employeeId !== employeeId));

  // Filtrer les assignations d'un jour
  const getAssignmentsByDay = (day) => assignments.filter((a) => a.day === day);

  // Filtrer les assignations par employé
  const getAssignmentsByEmployee = (employeeId) =>
    assignments.filter((a) => a.employeeId === employeeId);

  // Total minutes travaillées par un employé
  const calculateHours = (employeeId) =>
    getEmployeeHours(employeeId, assignments, DEFAULT_SHIFTS);

  return {
    assignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
    deleteAssignmentsByEmployee,
    getAssignmentsByDay,
    getAssignmentsByEmployee,
    calculateHours,
  };
}
