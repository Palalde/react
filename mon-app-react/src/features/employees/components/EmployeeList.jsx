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
    <div className="bg-bg-secondary rounded-lg shadow-md border border-border overflow-hidden lg:bg-transparent lg:shadow-none lg:border-0">
      {/* Header */}
      <div className="bg-bg-tertiary border-b border-border px-4 py-3 lg:bg-transparent lg:border-0 lg:px-0 lg:pb-3">
        <h2 className="text-lg font-bold text-text-primary">👥 Employés</h2>
      </div>

      {/* Liste: horizontal scrollable sur mobile, vertical sur desktop */}
      <div className="p-3 lg:p-0">
        <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0 lg:space-y-3 lg:gap-0">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="flex-shrink-0 w-56 sm:w-64 lg:w-full"
            >
              <EmployeeCard
                employee={employee}
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
