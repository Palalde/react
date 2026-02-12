import { useState } from "react";
import { Modal, Button } from "@/components/ui";
import { DEFAULT_SHIFTS } from "@/constants";
import { getEmployeeHours } from "@/utils";
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";

function EmployeeList({
  employees,
  setEmployees,
  assignments,
  onDeleteEmployee,
}) {
  // State pour gérer l'ouverture/fermeture du modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State pour l'edition d'un employé
  const [employeeToEdit, setEmployeeToEdit] = useState(null);

  // Handler pour ajouter / enregistrer un employé
  const handleSaveEmployee = (employeeData) => {
    if (employeeToEdit) {
      // Mode édition: remplace l'employé existant
      setEmployees(
        employees.map((e) => (e.id === employeeData.id ? employeeData : e)),
      );
    } else {
      // Mode création: ajoute à la fin
      setEmployees([...employees, employeeData]);
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
    <div className="bg-bg-secondary rounded-lg shadow-md border border-border overflow-hidden lg:bg-transparent lg:shadow-none lg:border-0">
      {/* Header */}
      <div className="bg-bg-tertiary border-b border-border px-4 py-3 lg:bg-transparent lg:border-0 lg:px-0 lg:pb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-text-primary">👥 Employés</h2>
        <span className="text-xs text-text-muted">{employees.length}</span>
        {/* bouton pour ouvrir le modal de création */}
        <Button
          size="icon"
          variant="secondary"
          onClick={() => {
            setEmployeeToEdit(null);
            setIsModalOpen(true);
          }}
        >
          +
        </Button>
      </div>

      {/* Liste: horizontal scrollable sur mobile, vertical sur desktop */}
      <div className="p-3 lg:p-0">
        {employees.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <span className="text-4xl mb-2">👤</span>
            <p className="text-text-muted">Aucun employé</p>
            <p className="text-text-muted/60 text-sm mt-1">
              Ajoutez votre premier employé
            </p>
          </div>
        ) : (
          <div
            className={`
              flex gap-3 overflow-x-auto pb-2 scroll-smooth
              lg:flex-col lg:overflow-x-visible lg:pb-0 lg:space-y-3 lg:gap-0
            `}
          >
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="flex-shrink-0 w-56 sm:w-64 lg:w-full"
              >
                <EmployeeCard
                  employee={employee}
                  // recuperer le nombre de minutes travaillé d'un employée
                  workedMinutes={getEmployeeHours(
                    employee.id,
                    assignments,
                    DEFAULT_SHIFTS,
                  )}
                  onEdit={() => handleEditClick(employee)}
                  onDelete={() => handleDeleteEmployee(employee.id)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Modal pour ajouter un employé */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={employeeToEdit ? "Éditer Employé" : "Ajouter Employé"}
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
    </div>
  );
}

export default EmployeeList;
