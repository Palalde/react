import { Header, Container } from "@/components/layout";
import { EmployeeList, useEmployees } from "@/features/employees";
import { useAssignments } from "@/features/assignments";
import { PlanningTable } from "@/features/planning";
import { useShifts } from "@/features/shifts";

function App() {
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
        <main className="py-4 sm:py-6">
          {/* Layout responsive: vertical mobile, horizontal desktop */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-start">
            {/* Sidebar: Liste des employés */}
            <aside className="w-full lg:w-64 lg:flex-shrink-0">
              <EmployeeList
                employees={employees}
                assignments={assignments}
                addEmployee={addEmployee}
                updateEmployee={updateEmployee}
                onDeleteEmployee={handleDeleteEmployee}
              />
            </aside>

            {/* Main: Tableau de planning */}
            <section className="flex-1 min-w-0">
              <PlanningTable
                employees={employees}
                assignments={assignments}
                shifts={shifts}
                onAddAssignment={addAssignment}
                onEditAssignment={updateAssignment}
                onDeleteAssignment={deleteAssignment}
              />
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
}

export default App;
