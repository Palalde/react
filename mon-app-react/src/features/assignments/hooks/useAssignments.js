import { useLocalReducer } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";

function assignmentsReducer(assignments, action) {
  switch (action.type) {
    case "ADD":
      return [...assignments, action.payload];
    case "UPDATE":
      return assignments
        .filter((a) => !action.payload.conflictingIds.includes(a.id))
        .map((a) =>
          a.id === action.payload.assignment.id ? action.payload.assignment : a,
        );
    case "DELETE":
      return assignments.filter((a) => a.id !== action.payload);
    case "DELETE_BY_EMPLOYEE":
      return assignments.filter((a) => a.employeeId !== action.payload);
    case "DELETE_BY_SHIFT":
      return assignments.filter((a) => a.shiftId !== action.payload);
    default:
      return assignments;
  }
}

export default function useAssignments(shifts = [], currentWeek = "") {
  // reducer
  const [assignments, dispatch] = useLocalReducer(
    "assignments",
    assignmentsReducer,
    [],
  );

  // filtrer les assignments par semaine
  const weeklyAssignments = assignments.filter((a) => a.weekOf === currentWeek);

  // Ajouter une nouvelle assignation
  const addAssignment = (assignmentData) => {
    dispatch({
      type: "ADD",
      payload: { ...assignmentData, id: generateId(), weekOf: currentWeek },
    });
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
    //5. dispatch finale pour mettre a jour le states
    dispatch({
      type: "UPDATE",
      payload: { assignment: assignmentData, conflictingIds },
    });
  };

  // Supprimer une assignation par id
  const deleteAssignment = (assignmentId) =>
    dispatch({ type: "DELETE", payload: assignmentId });

  // Supprimer toutes les assignations d'un employé
  const deleteAssignmentsByEmployee = (employeeId) =>
    dispatch({ type: "DELETE_BY_EMPLOYEE", payload: employeeId });

  // Supprimer toutes les assignations d'un shift
  const deleteAssignmentsByShift = (shiftId) =>
    dispatch({ type: "DELETE_BY_SHIFT", payload: shiftId });

  // Filtrer les assignations d'un jour
  const getAssignmentsByDay = (day) =>
    weeklyAssignments.filter((a) => a.day === day);

  // Filtrer les assignations par employé
  const getAssignmentsByEmployee = (employeeId) =>
    assignments.filter((a) => a.employeeId === employeeId);

  // Total minutes travaillées par un employé
  const calculateHours = (employeeId) =>
    getEmployeeHours(employeeId, weeklyAssignments, shifts);

  return {
    assignments: weeklyAssignments,
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
