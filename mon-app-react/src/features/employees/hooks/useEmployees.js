import { useCallback } from "react";
import { useLocalStorage } from "@/hooks";
import { MOCK_EMPLOYEES } from "@/data";
import { generateId } from "@/utils";

export default function useEmployees() {
  const [employees, setEmployees] = useLocalStorage(
    "employees",
    MOCK_EMPLOYEES,
  );

  // Ajouter un employé (id généré automatiquement)
  const addEmployee = useCallback(
    (employeeData) => {
      setEmployees((prev) => [...prev, { ...employeeData, id: generateId() }]);
    },
    [setEmployees],
  );

  // Modifier un employé existant
  const updateEmployee = useCallback(
    (employeeData) => {
      setEmployees((prev) =>
        prev.map((p) => (p.id === employeeData.id ? employeeData : p)),
      );
    },
    [setEmployees],
  );

  // Supprimer un employé par id
  const deleteEmployee = useCallback(
    (employeeId) => {
      setEmployees((prev) => prev.filter((p) => p.id !== employeeId));
    },
    [setEmployees],
  );

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
}
