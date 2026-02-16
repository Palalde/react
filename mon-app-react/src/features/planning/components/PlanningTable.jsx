// 🎯 Task 9.1.1 : PlanningTable — Squelette tableau Employé × Jour (AM/PM)
// 🎨 UI/Tailwind — Mentor fournit le code complet

import { DAYS_OF_WEEK } from "@/constants";
import { EmployeeRow } from "@/features/planning";

function PlanningTable({
  employees,
  assignments,
  shifts,
  onAddAssignment,
  onEditAssignment,
  onDeleteAssignment,
}) {
  return (
    <div className="bg-bg-primary rounded-xl shadow-md border border-border overflow-hidden">
      {/* Titre du planning */}
      <div className="bg-bg-tertiary border-b border-border px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-text-primary">
            📅 Planning de la semaine
          </h2>
          <span className="text-xs text-text-muted lg:hidden">← Scroll →</span>
        </div>
      </div>

      {/* Wrapper scroll horizontal */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[700px]">
          {/* En-tête : colonne Employé + 7 jours */}
          <thead>
            <tr className="bg-bg-tertiary border-b border-border">
              {/* Colonne Employé — sticky à gauche */}
              <th className="sticky left-0 z-20 bg-bg-tertiary text-left px-3 sm:px-4 py-3 min-w-[180px] sm:min-w-[220px] border-r border-border">
                <span className="text-sm font-semibold text-text-secondary">
                  👤 Employé
                </span>
              </th>

              {/* 7 colonnes jours */}
              {DAYS_OF_WEEK.map((day) => (
                <th
                  key={day.id}
                  className="px-2 sm:px-3 py-3 text-center min-w-[90px] sm:min-w-[110px] border-r border-border last:border-r-0"
                >
                  {/* Nom court mobile, complet desktop */}
                  <span className="text-sm font-semibold text-text-primary sm:hidden">
                    {day.shortName}
                  </span>
                  <span className="text-sm font-semibold text-text-primary hidden sm:inline">
                    {day.name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          {/* Corps du tableau — les EmployeeRow viendront ici (Task 9.1.2) */}
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <EmployeeRow
                  key={employee.id}
                  employee={employee}
                  assignments={assignments}
                  shifts={shifts}
                  onAddAssignment={onAddAssignment}
                  onEditAssignment={onEditAssignment}
                  onDeleteAssignment={onDeleteAssignment}
                />
              ))
            ) : (
              /* Empty state — aucun employé */
              <tr>
                <td
                  colSpan={1 + DAYS_OF_WEEK.length}
                  className="px-4 py-16 text-center"
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-4xl opacity-30">📅</span>
                    <p className="text-text-muted text-sm font-medium">
                      Planning vide
                    </p>
                    <p className="text-text-muted/60 text-xs">
                      Commencez par ajouter des employés
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlanningTable;
