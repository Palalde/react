import { useState } from "react";
import { Modal, Button } from "@/components/ui";
import { getEmployeeHours } from "@/utils";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";
import { useAppContext } from "@/context/AppContext";

function EmployeeList({ onDeleteEmployee }) {
  // context
  const { employees, addEmployee, updateEmployee, assignments, shifts } =
    useAppContext();

  // State pour gérer l'ouverture/fermeture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State pour l'edition d'un employé
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  // Handler pour ajouter / enregistrer un employé
  const handleSaveEmployee = (employeeData) => {
    if (employeeToEdit) {
      // Mode édition: remplace l'employé existant
      updateEmployee(employeeData);
    } else {
      // mode création
      addEmployee(employeeData);
    }
    setIsModalOpen(false);
    setEmployeeToEdit(null);
  };

  // handler pour éditer un employé existant
  const handleEditClick = (employee) => {
    setEmployeeToEdit(employee);
    setIsModalOpen(true);
  };

  // handler pour supprimer un employé (+ nettoyage assignations via App)
  const handleDeleteEmployee = (employeeId) => {
    onDeleteEmployee(employeeId);
  };

  return (
    <div className="space-y-3">
      {/* Barre d'actions : compteur + bouton ajouter */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-secondary">
          {employees.length} employé{employees.length > 1 ? "s" : ""}
        </p>
        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            setEmployeeToEdit(null);
            setIsModalOpen(true);
          }}
        >
          + Ajouter
        </Button>
      </div>

      {/* Liste d'employés — pleine largeur, empilée */}
      {employees.length === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <span className="text-5xl mb-3">👤</span>
          <p className="text-text-muted font-medium">Aucun employé</p>
          <p className="text-text-muted/60 text-sm mt-1">
            Cliquez sur "+ Ajouter" pour commencer
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              workedMinutes={
                getEmployeeHours(employee.id, assignments, shifts).total
              }
              onEdit={() => handleEditClick(employee)}
              onDelete={() => handleDeleteEmployee(employee.id)}
            />
          ))}
        </div>
      )}

      {/* Modal pour ajouter/éditer un employé */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={employeeToEdit ? "✏️ Éditer Employé" : "➕ Nouvel Employé"}
        size="md"
      >
        <EmployeeForm
          employee={employeeToEdit}
          employees={employees}
          onSubmit={handleSaveEmployee}
          onCancel={() => {
            setIsModalOpen(false);
            setEmployeeToEdit(null);
          }}
        />
      </Modal>
    </div>
  );
}

export default EmployeeList;
