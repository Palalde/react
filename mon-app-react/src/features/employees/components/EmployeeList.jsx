import { useState } from "react";
import { EmployeeCard } from "@/features/employees/components";
import { MOCK_EMPLOYEES } from "@/data";

function EmployeeList() {
  // useState pour stocker la liste des employés
  const [employees, setEmployees] = useState(MOCK_EMPLOYEES);

  {
    setEmployees;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Employés</h2>

      {/* parcourir la liste des employés */}
      {employees.map((employee) => (
        // afficher un EmployeeCard pour chaque employé
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
