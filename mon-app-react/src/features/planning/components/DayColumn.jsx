function DayColumn({ day }) {
  return (
    <div className="flex-shrink-0 w-28 sm:w-32 lg:w-auto lg:flex-1 lg:min-w-[120px] border-r border-border last:border-r-0 snap-start">
      {/* Header du jour */}
      <div className="bg-bg-tertiary border-b border-border p-2 sm:p-3 text-center sticky top-0 z-10">
        {/* Nom court sur mobile, complet sur desktop */}
        <h3 className="font-semibold text-text-primary text-xs sm:text-sm">
          <span className="sm:hidden">{day.shortName}</span>
          <span className="hidden sm:inline">{day.name}</span>
        </h3>
      </div>

      {/* Zone des assignations */}
      <div className="p-2 sm:p-3 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] bg-bg-primary space-y-2">
        {/* TODO Phase 7: Ici on affichera les assignations du jour */}
        <p className="text-text-muted text-xs sm:text-sm text-center mt-4 sm:mt-8">
          Vide
        </p>
      </div>
    </div>
  );
}

export default DayColumn;
