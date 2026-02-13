// 🎯 Task 8.1.1 : Créer useEmployees hook
// 📁 File: src/features/employees/hooks/useEmployees.js

// 📚 Un custom hook = une fonction qui utilise d'autres hooks
//    et retourne une API (objet avec données + fonctions)

import { useLocalStorage } from "@/hooks";
import { MOCK_EMPLOYEES } from "@/data";
import { generateId } from "@/utils";

export default function useEmployees() {
  // state persisté avec useLocalStorage
  // la liste des employés
  const [employees, setEmployees] = useLocalStorage(
    "employees",
    MOCK_EMPLOYEES,
  );
  // TODO: addEmployee — ajouter un employé (générer l'id ici !)

  const addEmployee = (employeeData) => {
    setEmployees([...employees, { ...employeeData, id: generateId() }]);
  };

  // TODO: updateEmployee — modifier un employé existant
  const updateEmployee = (employeeData) => {
    setEmployees(
      employees.map((e) => (e.id === employeeData.id ? employeeData : e)),
    );
  };

  // TODO: deleteEmployee — supprimer un employé par id

  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((e) => e.id !== employeeId));
  };

  // TODO: getEmployeeById — retrouver un employé par son id

  const getEmployeeById = (employeeId) =>
    employees.find((e) => e.id === employeeId);

  return {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    employees,
  };
}
