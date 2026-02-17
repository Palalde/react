// 🎯 Task 9.1.3 : PlanningCell — Cellule individuelle AM ou PM
// 🎨 Styling Tailwind = Mentor | ⚛️ Câblage dans EmployeeRow = Paul

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
  // Gestion visuelle du shift "Journée" qui couvre AM + PM
  const isJournee = shift?.id === "journee";
  const isAM = period === "am";

  // Journée : AM = coin haut arrondi, PM = coin bas arrondi, pas de séparation
  const journeeClasses = isJournee
    ? isAM
      ? "rounded-t rounded-b-none border-b-0"
      : "rounded-b rounded-t-none border-t-0"
    : "rounded";

  return (
    <div
      onClick={onClick}
      className={`w-full h-full min-h-[36px] ${journeeClasses} border cursor-pointer
        ${shift?.colorClass || "bg-bg-tertiary border-border"}
        hover:shadow-md hover:brightness-95 active:scale-[0.97]
        transition-all duration-200
        flex items-center justify-center`}
      role="button"
      tabIndex={0}
      aria-label={`${shift?.name} — cliquer pour modifier`}
      onKeyDown={(e) => e.key === "Enter" && onClick?.()}
    >
      <span className="text-xs font-medium text-text-primary truncate px-1">
        {isJournee
          ? isAM
            ? shift.startTime
            : shift.endTime
          : `${shift?.startTime} - ${shift?.endTime}`}
      </span>
    </div>
  );
}

export default PlanningCell;
