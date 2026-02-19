import { Header, Container } from "@/components/layout";
import { Modal, Button } from "@/components/ui";
import { EmployeeList, useEmployees } from "@/features/employees";
import { useAssignments } from "@/features/assignments";
import { PlanningTable } from "@/features/planning";
import { useShifts } from "@/features/shifts";
import { getShiftColorClass } from "@/utils";
import { useState } from "react";

function App() {
  // states
  // employee modal state
  const [isEmpModOpen, setIsEmpModOpen] = useState(false);
  // assignment selected for edit delete and modal
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // custom Hooks
  // employees
  const { employees, addEmployee, updateEmployee, deleteEmployee } =
    useEmployees();
  // shifts
  const { shifts } = useShifts();
  // Assignments
  const {
    assignments,
    addAssignment,
    updateAssignment,
    deleteAssignment,
    deleteAssignmentsByEmployee,
  } = useAssignments();
  // HANDLERS

  // DeleteEmployee Handler (+ nettoyage assignations orphelines)
  const handleDeleteEmployee = (employeeId) => {
    deleteEmployee(employeeId);
    deleteAssignmentsByEmployee(employeeId);
  };

  // assignation handler
  const handleCellClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      {/* Header */}
      <Header />

      {/* structure  */}
      <Container>
        <main className="py-4 sm:py-6 space-y-4">
          {/* titre / boutton CRUD employé */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary">
              📋 Planning de la semaine
            </h2>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsEmpModOpen(true)}
            >
              👥 Gérer les employés
            </Button>
          </div>

          {/* Tableau pleine largeur */}
          <PlanningTable
            employees={employees}
            assignments={assignments}
            shifts={shifts}
            onAddAssignment={addAssignment}
            onEditAssignment={updateAssignment}
            onDeleteAssignment={deleteAssignment}
            onCellClick={handleCellClick}
          />

          {/* Modal CRUD employés */}
          <Modal
            isOpen={isEmpModOpen}
            onClose={() => setIsEmpModOpen(false)}
            title="👥 Gestion des employés"
            size="lg"
          >
            <EmployeeList
              employees={employees}
              assignments={assignments}
              addEmployee={addEmployee}
              updateEmployee={updateEmployee}
              onDeleteEmployee={handleDeleteEmployee}
            />
          </Modal>

          {/* Modal assignment cellule */}
          <Modal
            isOpen={selectedAssignment}
            onClose={() => setSelectedAssignment(null)}
            title="📝 Modifier l'assignation"
            size="sm"
          >
            <div className="space-y-4">
              {/* Sélecteur de shift */}
              <div className="space-y-2">
                <p className="text-sm text-text-secondary font-medium">
                  Changer le shift :
                </p>
                <div className="flex flex-col gap-2">
                  {shifts.map((shift) => (
                    <button
                      key={shift.id}
                      onClick={() => {
                        updateAssignment({
                          ...selectedAssignment,
                          shiftId: shift.id,
                        });
                        setSelectedAssignment(null);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg border transition-all
              ${getShiftColorClass(shift.type)} hover:shadow-md hover:brightness-95
              ${
                selectedAssignment?.shiftId === shift.id
                  ? "ring-2 ring-accent"
                  : ""
              }`}
                    >
                      <span className="text-sm font-medium text-text-primary">
                        {shift.name}
                      </span>
                      <span className="text-xs text-text-secondary ml-2">
                        {shift.startTime} - {shift.endTime}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bouton supprimer */}
              <div className="pt-2 border-t border-border">
                <Button
                  variant="danger"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    deleteAssignment(selectedAssignment.id);
                    setSelectedAssignment(null);
                  }}
                >
                  🗑️ Supprimer l'assignation
                </Button>
              </div>
            </div>
          </Modal>
        </main>
      </Container>
    </div>
  );
}

export default App;
