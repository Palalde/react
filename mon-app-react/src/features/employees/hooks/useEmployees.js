// 🎯 Task 8.1.1 : Créer useEmployees hook
// 📁 File: src/features/employees/hooks/useEmployees.js

// 📚 Un custom hook = une fonction qui utilise d'autres hooks
//    et retourne une API (objet avec données + fonctions)

import { useLocalStorage } from "@/hooks";
import { MOCK_EMPLOYEES } from "@/data";
import { generateId, getAvailableColor } from "@/utils";

export default function useEmployees() {
  // TODO: state persisté avec useLocalStorage

  // TODO: addEmployee — ajouter un employé (générer l'id ici !)

  // TODO: updateEmployee — modifier un employé existant

  // TODO: deleteEmployee — supprimer un employé par id

  // TODO: getEmployeeById — retrouver un employé par son id

  return {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById,
    employees,
  };
}
