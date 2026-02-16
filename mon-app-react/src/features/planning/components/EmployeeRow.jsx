// 🎯 Task 9.1.2 : EmployeeRow — Ligne employé avec sous-lignes AM/PM
// 🎨 Styling Tailwind = Mentor | ⚛️ Logique React = Paul

import { DAYS_OF_WEEK } from "@/constants";
import { formatMinutesToDisplay, getEmployeeHours } from "@/utils";

function EmployeeRow({
  employee,
  assignments,
  shifts,
  //   onAddAssignment,
  //   onEditAssignment,
  //   onDeleteAssignment,
}) {
  // Calcul des heures (total, AM, PM) via utilitaire centralisé
  const {
    total: totalMinutes,
    am: amMinutes,
    pm: pmMinutes,
  } = getEmployeeHours(employee.id, assignments, shifts);
  const isOvertime = totalMinutes > employee.weeklyMinutes;

  return (
    <>
      {/* ── Ligne AM (☀️ Matin) ── */}
      <tr className="border-b border-border/50 group/row">
        {/* Cellule employé — rowSpan 2 (AM + PM), sticky à gauche */}
        <td
          rowSpan={2}
          className="sticky left-0 z-10 bg-bg-primary border-r border-border p-0 align-stretch group-hover/row:bg-bg-secondary/30 transition-colors"
        >
          <div className="flex flex-col h-full">
            {/* ── Ligne AM : Nom + pastille | ☀️ total AM ── */}
            <div className="flex items-center justify-between gap-2 px-3 sm:px-4 h-[44px] border-b border-border/30">
              <div className="flex items-center gap-2 min-w-0">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0 ring-1 ring-border"
                  style={{ backgroundColor: employee.color }}
                  aria-label={`Couleur: ${employee.color}`}
                />
                <span className="font-semibold text-sm text-text-primary truncate">
                  {employee.name}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted flex-shrink-0">
                <span>☀️</span>
                <span>{formatMinutesToDisplay(amMinutes)}</span>
              </div>
            </div>

            {/* ── Ligne PM : Heures total/contrat | 🌙 total PM ── */}
            <div className="flex items-center justify-between gap-2 px-3 sm:px-4 h-[44px]">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-text-muted">●</span>
                <span
                  className={`text-xs ${isOvertime ? "text-danger font-semibold" : "text-text-secondary"}`}
                >
                  {formatMinutesToDisplay(totalMinutes)} /{" "}
                  {formatMinutesToDisplay(employee.weeklyMinutes)}
                </span>
                {isOvertime && (
                  <span
                    className="text-xs text-danger bg-danger/10 rounded-full px-1.5 py-0.5"
                    title="Dépassement d'heures"
                  >
                    ⚠️
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-text-muted flex-shrink-0">
                <span>🌙</span>
                <span>{formatMinutesToDisplay(pmMinutes)}</span>
              </div>
            </div>
          </div>
        </td>

        {/* 7 cellules AM — une par jour */}
        {DAYS_OF_WEEK.map((day) => (
          <td
            key={`${employee.id}-${day.id}-am`}
            className="border-r border-border/50 last:border-r-0 p-1 h-[44px] align-middle"
          >
            {/* TODO: Task 9.1.3 — PlanningCell AM ici */}
          </td>
        ))}
      </tr>

      {/* ── Ligne PM (🌙 Après-midi) ── */}
      <tr className="border-b border-border group/row">
        {/* Pas de <td> employé ici : rowSpan=2 couvre cette ligne */}

        {/* 7 cellules PM — une par jour */}
        {DAYS_OF_WEEK.map((day) => (
          <td
            key={`${employee.id}-${day.id}-pm`}
            className="border-r border-border/50 last:border-r-0 p-1 h-[44px] align-middle"
          >
            {/* TODO: Task 9.1.3 — PlanningCell PM ici */}
          </td>
        ))}
      </tr>
    </>
  );
}

export default EmployeeRow;
