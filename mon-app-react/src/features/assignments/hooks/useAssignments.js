import { useLocalStorage } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";

export default function useAssignments(shifts = []) {
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

    // 2. Résoudre le TYPE du nouveau shift (pour comparer par type, pas par id)
    const newShift = shifts.find((s) => s.id === assignmentData.shiftId);
    const newType = newShift?.type;

    // 3. Map des conflits entre types de shifts
    // split conflicte avec tout (comme journée) car il occupe AM + PM
    const conflictMap = {
      am: ["full", "am", "split"],
      pm: ["full", "pm", "split"],
      full: ["am", "pm", "split"],
      split: ["am", "pm", "full", "split"],
    };

    // 4. Collecter les ids des assignations conflictuelles
    //    = même employé, même jour, shift dont le TYPE chevauche, mais PAS celle qu'on édite
    const conflictingIds = assignments
      .filter((a) => {
        if (a.id === assignmentData.id) return false;
        if (a.employeeId !== assignmentData.employeeId) return false;
        if (a.day !== assignmentData.day) return false;
        const existingShift = shifts.find((s) => s.id === a.shiftId);
        return conflictMap[newType]?.includes(existingShift?.type);
      })
      .map((a) => a.id);

    // 5. En une seule opération : supprimer les conflits + mettre à jour l'assignation
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

  // Supprimer toutes les assignations d'un shift
  const deleteAssignmentsByShift = (shiftId) =>
    setAssignments(assignments.filter((a) => a.shiftId !== shiftId));

  // Filtrer les assignations d'un jour
  const getAssignmentsByDay = (day) => assignments.filter((a) => a.day === day);

  // Filtrer les assignations par employé
  const getAssignmentsByEmployee = (employeeId) =>
    assignments.filter((a) => a.employeeId === employeeId);

  // Total minutes travaillées par un employé
  const calculateHours = (employeeId) =>
    getEmployeeHours(employeeId, assignments, shifts);

  return {
    assignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
    deleteAssignmentsByEmployee,
    deleteAssignmentsByShift,
    getAssignmentsByDay,
    getAssignmentsByEmployee,
    calculateHours,
  };
}
