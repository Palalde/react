export default function WeekNavigator({
  currentWeek,
  onPrev,
  onNext,
  onToday,
}) {
  // Afficher la date de façon lisible "Semaine du 16 févr. 2026"
  const formattedWeek = new Date(currentWeek + "T12:00:00").toLocaleDateString(
    "fr-FR",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {/* Bouton semaine précédente */}
      <button
        onClick={onPrev}
        className="p-2 rounded-lg border border-border bg-bg-primary text-text-secondary
          hover:bg-bg-tertiary hover:text-text-primary transition-colors cursor-pointer"
        aria-label="Semaine précédente"
      >
        ◀
      </button>

      {/* Bouton Aujourd'hui + affichage semaine */}
      <button
        onClick={onToday}
        className="px-4 py-2 rounded-lg border border-border bg-bg-primary text-text-primary
          hover:bg-bg-tertiary transition-colors cursor-pointer min-w-[220px] text-center"
      >
        <span className="text-sm font-medium">Semaine du {formattedWeek}</span>
      </button>

      {/* Bouton semaine suivante */}
      <button
        onClick={onNext}
        className="p-2 rounded-lg border border-border bg-bg-primary text-text-secondary
          hover:bg-bg-tertiary hover:text-text-primary transition-colors cursor-pointer"
        aria-label="Semaine suivante"
      >
        ▶
      </button>
    </div>
  );
}
