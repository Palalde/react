// 🎯 Task 9.1.3 : PlanningCell — Cellule individuelle AM ou PM
// 🎨 Styling Tailwind = Mentor | ⚛️ Câblage dans EmployeeRow = Paul

import { SHIFT_TYPE_CONFIG } from "@/constants";

function PlanningCell({ assignment, shift, period, onClick }) {
  // Cellule vide → zone cliquable
  if (!assignment) {
    return (
      <div
        onClick={onClick}
        className="w-full h-full min-h-[36px] rounded cursor-pointer
          hover:bg-bg-secondary/50 transition-colors
          flex items-center justify-center"
        role="button"
        tabIndex={0}
        aria-label={`Assigner un shift`}
        onKeyDown={(e) => e.key === "Enter" && onClick?.()}
      >
        <span className="text-text-muted/0 hover:text-text-muted/40 text-lg transition-colors">
          +
        </span>
      </div>
    );
  }

  // Cellule occupée → afficher le shift
  // Gestion visuelle des shifts multi-ligne (journée et coupé) qui couvrent AM + PM
  const isMultiLine = shift?.type === "full" || shift?.type === "split";
  const isAM = period === "am";

  // Journée/Coupé : AM = coin haut arrondi, PM = coin bas arrondi, pas de séparation
  const multiLineClasses = isMultiLine
    ? isAM
      ? "rounded-t rounded-b-none border-b-0"
      : "rounded-b rounded-t-none border-t-0"
    : "rounded";

  // Couleur dérivée du type (plus de colorClass stockée)
  const colorClass = SHIFT_TYPE_CONFIG[shift?.type].colorClass;

  // Texte affiché dans la cellule selon le type
  const getCellLabel = () => {
    if (!shift) return "";

    if (shift.type === "full") {
      // Journée → AM affiche startTime, PM affiche endTime
      return isAM ? shift.startTime : shift.endTime;
    }

    if (shift.type === "split") {
      // Coupé → AM affiche start-breakStart, PM affiche breakEnd-end
      return isAM
        ? `${shift.startTime} - ${shift.breakStart}`
        : `${shift.breakEnd} - ${shift.endTime}`;
    }

    // Matin / Après-midi → affiche start - end
    return `${shift.startTime} - ${shift.endTime}`;
  };

  return (
    <div
      onClick={onClick}
      className={`w-full h-full min-h-[36px] ${multiLineClasses} border cursor-pointer
        ${colorClass}
        hover:shadow-md hover:brightness-95 active:scale-[0.97]
        transition-all duration-200
        flex items-center justify-center`}
      role="button"
      tabIndex={0}
      aria-label={`${shift?.name} — cliquer pour modifier`}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <span className="text-xs font-medium text-text-primary truncate px-1">
        {getCellLabel()}
      </span>
    </div>
  );
}

export default PlanningCell;
