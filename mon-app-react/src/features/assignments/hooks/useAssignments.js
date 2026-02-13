// 🎯 Task 8.1.3 : Créer useAssignments hook
// 📁 File: src/features/assignments/hooks/useAssignments.js

import { useLocalStorage } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";
import { DEFAULT_SHIFTS } from "@/constants";

export default function useAssignments() {
  // state persisté avec useLocalStorage
  const [assignments, setAssignments] = useLocalStorage("assignments", []);

  // addAssignment — ajouter (générer l'id ici !)
  const addAssignment = (assignmentData) => {
    setAssignments([...assignments, { ...assignmentData, id: generateId() }]);
  };
  // updateAssignment — modifier une assignation existante
  const updateAssignment = (assignmentData) => {
    setAssignments(
      assignments.map((a) => (a.id === assignmentData.id ? assignmentData : a)),
    );
  };
  // deleteAssignment — supprimer une assignation par id
  const deleteAssignment = (assignmentId) =>
    setAssignments(assignments.filter((a) => a.id !== assignmentId));

  // deleteAssignmentsByEmployee - supprime un assignation lié a un employee
  const deleteAssignmentsByEmployee = (employeeId) =>
    setAssignments(assignments.filter((a) => a.employeeId !== employeeId));

  // getAssignmentsByDay — filtrer les assignations d'un jour
  const getAssignmentsByDay = (day) => assignments.filter((a) => a.day === day);

  // getAssignmentsByEmployee — filtrer par employé
  const getAssignmentsByEmployee = (employeeId) =>
    assignments.filter((a) => a.employeeId === employeeId);

  // calculateHours — total minutes travaillées par un employé
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
