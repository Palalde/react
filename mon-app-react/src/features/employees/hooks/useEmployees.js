import { useLocalStorage } from "@/hooks";
import { MOCK_EMPLOYEES } from "@/data";
import { generateId } from "@/utils";

export default function useEmployees() {
  const [employees, setEmployees] = useLocalStorage(
    "employees",
    MOCK_EMPLOYEES,
  );

  // Ajouter un employé (id généré automatiquement)
  const addEmployee = (employeeData) => {
    setEmployees([...employees, { ...employeeData, id: generateId() }]);
  };

  // Modifier un employé existant
  const updateEmployee = (employeeData) => {
    setEmployees(
      employees.map((e) => (e.id === employeeData.id ? employeeData : e)),
    );
  };

  // Supprimer un employé par id
  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((e) => e.id !== employeeId));
  };

  // Retrouver un employé par son id
  const getEmployeeById = (employeeId) =>
    employees.find((e) => e.id === employeeId);

  return {
    employees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
  };
}
