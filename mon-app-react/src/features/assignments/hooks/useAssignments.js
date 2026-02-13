// 🎯 Task 8.1.3 : Créer useAssignments hook
// 📁 File: src/features/assignments/hooks/useAssignments.js

import { useLocalStorage } from "@/hooks";
import { generateId, getEmployeeHours } from "@/utils";
import { DEFAULT_SHIFTS } from "@/constants";

export default function useAssignments() {
  // TODO: state persisté avec useLocalStorage
  const [assignments, setAssignments] = useLocalStorage("assignments", []);

  // TODO: addAssignment — ajouter (générer l'id ici !)
  const addAssignment = (assignmentData) => {
    setAssignments([...assignments, { ...assignmentData, id: generateId() }]);
  };
  // TODO: updateAssignment — modifier une assignation existante
  const updateAssignment = (assignmentData) => {
    setAssignments(
      assignments.map((a) => (a.id === assignmentData.id ? assignmentData : a)),
    );
  };
  // TODO: deleteAssignment — supprimer une assignation par id
  const deleteAssignment = (assignmentId) =>
    setAssignments(assignments.filter((a) => a.id !== assignmentId));

  // TODO: getAssignmentsByDay — filtrer les assignations d'un jour
  //       💡 Pense à .filter() avec day === ???
  const getAssignmentsByDay = (day) => assignments.filter((a) => a.day === day);

  // TODO: getAssignmentsByEmployee — filtrer par employé
  //       💡 Utile pour le nettoyage quand on supprime un employé !
  const getAssignmentsByEmployee = (employeeId) =>
    assignments.filter((a) => a.employeeId === employeeId);

  // TODO: calculateHours — total minutes travaillées par un employé
  //       💡 Regarde getEmployeeHours dans timeUtils.js, c'est la même logique
  const calculateHours = (employeeId) =>
    getEmployeeHours(employeeId, assignments, DEFAULT_SHIFTS);

  return {
    assignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
    getAssignmentsByDay,
    getAssignmentsByEmployee,
    calculateHours,
  };
}
