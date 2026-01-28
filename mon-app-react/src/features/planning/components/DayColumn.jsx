function DayColumn({ day }) {
  return (
    <div className="flex-1 min-w-[140px] border-r border-border last:border-r-0">
      {/* Header du jour */}
      <div className="bg-bg-tertiary border-b border-border p-3 text-center sticky top-0 z-10">
        <h3 className="font-semibold text-text-primary text-sm">{day.name}</h3>
        <p className="text-xs text-text-muted mt-0.5">({day.shortName})</p>
      </div>

      {/* Zone des assignations (vide pour l'instant) */}
      <div className="p-3 min-h-[500px] bg-bg-primary space-y-2">
        {/* TODO Phase 7: Ici on affichera les assignations du jour */}
        <p className="text-text-muted text-sm text-center mt-8">
          Aucune assignation
        </p>
      </div>
    </div>
  );
}

export default DayColumn;
