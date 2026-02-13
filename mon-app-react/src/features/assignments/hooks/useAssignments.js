import { useLocalStorage } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";
import { DEFAULT_SHIFTS } from "@/constants";

export default function useAssignments() {
  const [assignments, setAssignments] = useLocalStorage("assignments", []);

  // Ajouter une assignation (id généré automatiquement)
  const addAssignment = (assignmentData) => {
    setAssignments([...assignments, { ...assignmentData, id: generateId() }]);
  };

  // Modifier une assignation existante
  const updateAssignment = (assignmentData) => {
    setAssignments(
      assignments.map((a) => (a.id === assignmentData.id ? assignmentData : a)),
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
