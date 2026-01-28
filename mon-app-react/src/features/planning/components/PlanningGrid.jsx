// 🎯 Story 4.1.3 : Créer PlanningGrid
// 📚 Concept : Utiliser .map() pour générer 7 colonnes dynamiquement

import { DAYS_OF_WEEK } from "@/constants";
import DayColumn from "./DayColumn";

function PlanningGrid() {
  return (
    <div className="bg-bg-secondary rounded-lg shadow-md border border-border overflow-hidden">
      {/* Header de la grille */}
      <div className="bg-bg-tertiary border-b border-border px-4 py-3">
        <h2 className="text-lg font-bold text-text-primary">
          📅 Planning de la semaine
        </h2>
      </div>

      {/* Grille des 7 jours */}
      <div className="flex overflow-x-auto scrollbar-thin">
        {/* map de la grille */}
        {DAYS_OF_WEEK.map((day) => (
          <DayColumn key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
}

export default PlanningGrid;
