function DayColumn({ day }) {
  return (
    <div className="flex-shrink-0 w-28 sm:w-32 lg:w-auto lg:flex-1 lg:min-w-[120px] border-r border-border last:border-r-0 snap-start">
      {/* Header du jour - min 44px touch target */}
      <div className="bg-bg-tertiary border-b border-border p-2 sm:p-3 text-center sticky top-0 z-10 min-h-[44px] flex items-center justify-center">
        {/* Nom court sur mobile, complet sur desktop */}
        <h3 className="font-semibold text-text-primary text-xs sm:text-sm">
          <span className="sm:hidden">{day.shortName}</span>
          <span className="hidden sm:inline">{day.name}</span>
        </h3>
      </div>

      {/* Zone des assignations - hover state pour indiquer interactivité */}
      <div className="p-2 sm:p-3 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] bg-bg-primary space-y-2 hover:bg-bg-secondary/50 transition-colors cursor-pointer">
        {/* Empty state amélioré */}
        <div className="flex flex-col items-center justify-center h-full min-h-[150px] sm:min-h-[200px]">
          <span className="text-2xl sm:text-3xl mb-2 opacity-30">📭</span>
          <p className="text-text-muted text-xs sm:text-sm text-center">
            Aucune assignation
          </p>
          <p className="text-text-muted/60 text-xs mt-1 hidden sm:block">
            Cliquez pour ajouter
          </p>
        </div>
      </div>
    </div>
  );
}

export default DayColumn;
