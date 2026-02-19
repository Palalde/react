// 🎯 Task 9.1.2 : EmployeeRow — Ligne employé avec sous-lignes AM/PM
// 🎨 Styling Tailwind = Mentor | ⚛️ Logique React = Paul

import { DAYS_OF_WEEK } from "@/constants";
import { formatMinutesToDisplay, getEmployeeHours } from "@/utils";
import PlanningCell from "./PlanningCell";

function EmployeeRow({
  employee,
  assignments,
  shifts,
  onAddAssignment,
  onEditAssignment,
  onDeleteAssignment,
  onCellClick,
}) {
  // Calcul des heures (total, AM, PM) via utilitaire centralisé
  const {
    total: totalMinutes,
    am: amMinutes,
    pm: pmMinutes,
  } = getEmployeeHours(employee.id, assignments, shifts);
  const isOvertime = totalMinutes > employee.weeklyMinutes;
  //fonction pour les cellules aprem ou matin
  const renderDayCells = (shiftId, period) => {
    // parcourir les jours de la semaine pour cette ligne (AM ou PM)
    return DAYS_OF_WEEK.map((day) => {
      // assignation pour ce jour + shift (matin ou aprem)
      // journée et coupé occupent AM + PM donc matchent les deux lignes
      const dailyAssignment = assignments.find(
        (a) =>
          a.employeeId === employee.id &&
          a.day === day.id &&
          (a.shiftId === shiftId ||
            a.shiftId === "journee" ||
            a.shiftId === "coupe"),
      );

      // trouver le shift correspondant pour accéder à ses infos (ex: couleur)
      const Shift = shifts.find((s) => s.id === dailyAssignment?.shiftId);

      // retourner la cellule du planning pour ce jour + shift
      return (
        <td
          key={`${employee.id}-${day.id}-${period}`}
          className="border-r border-border/50 last:border-r-0 p-1 h-[44px] align-middle"
        >
          <PlanningCell
            assignment={dailyAssignment}
            shift={Shift}
            period={period}
            onClick={() =>
              !dailyAssignment
                ? onAddAssignment({
                    employeeId: employee.id,
                    day: day.id,
                    shiftId: shiftId,
                  })
                : onCellClick(dailyAssignment)
            }
            onDeleteAssignment={onDeleteAssignment}
            onEditAssignment={onEditAssignment}
          />
        </td>
      );
    });
  };
  return (
    <>
      {/* ── Ligne AM (Matin) ── */}
      <tr className="border-b border-border/50 group/row">
        {/* Cellule employé — rowSpan 2 (AM + PM), sticky à gauche */}
        <td
          rowSpan={2}
          className="sticky left-0 z-10 border-r border-border p-0 align-stretch transition-colors"
          style={{ backgroundColor: `${employee.color}08` }}
        >
          <div className="flex h-full">
            {/* Barre latérale couleur employé */}
            <div
              className="w-1 flex-shrink-0 rounded-l-sm"
              style={{ backgroundColor: employee.color }}
            />
            <div className="flex flex-col flex-1 min-w-0">
              {/* ── Ligne AM : Nom + pastille |  total AM ── */}
              <div className="flex items-center justify-between gap-2 px-3 sm:px-4 h-[44px] border-b border-border/30">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-semibold text-sm text-text-primary truncate">
                    {employee.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-muted flex-shrink-0">
                  <span>☀️</span>
                  <span>{formatMinutesToDisplay(amMinutes)}</span>
                </div>
              </div>

              {/* ── Ligne PM : Heures total/contrat | total PM ── */}
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
          </div>
        </td>

        {/* 7 cellules AM — une par jour */}
        {renderDayCells("matin", "am")}
      </tr>

      {/* ── Ligne PM ( Après-midi) ── */}
      <tr className="border-b border-border group/row">
        {renderDayCells("aprem", "pm")}
      </tr>
    </>
  );
}

export default EmployeeRow;
