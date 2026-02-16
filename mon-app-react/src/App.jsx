import { Header, Container } from "@/components/layout";
import { Modal, Button } from "@/components/ui";
import { EmployeeList, useEmployees } from "@/features/employees";
import { useAssignments } from "@/features/assignments";
import { PlanningTable } from "@/features/planning";
import { useShifts } from "@/features/shifts";
import { useState } from "react";

function App() {
  // states
  // modal states
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <Header />
      <Container>
        <main className="py-4 sm:py-6 space-y-4">
          {/* Barre d'actions au-dessus du tableau */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-text-primary">
              📋 Planning de la semaine
            </h2>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsOpen(true)}
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
          />

          {/* Modal CRUD employés */}
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
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
        </main>
      </Container>
    </div>
  );
}

export default App;
