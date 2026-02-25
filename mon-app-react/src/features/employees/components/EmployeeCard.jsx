import { Badge, Button } from "@/components/ui";
import { formatMinutesToDisplay } from "@/utils";

function EmployeeCard({ employee = {}, workedMinutes, onEdit, onDelete }) {
  // calculer si l'employee a trop d'heure
  const isOvertime = workedMinutes > employee.weeklyMinutes;

  return (
    <div className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-bg-primary hover:bg-bg-tertiary/50 hover:border-accent/30 transition-all duration-200">
      {/* Pastille couleur */}
      <div
        className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-border"
        style={{ backgroundColor: employee.color }}
        title={`Couleur: ${employee.color}`}
      />

      {/* Infos employé — prend tout l'espace */}
      <div className="flex-1 min-w-0">
        {/* Ligne 1 : Nom + heures */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-text-primary truncate">
            {employee.name}
          </span>
          <span
            className={`text-xs flex-shrink-0 ${isOvertime ? "text-danger font-semibold" : "text-text-muted"}`}
          >
            {formatMinutesToDisplay(workedMinutes)}/
            {formatMinutesToDisplay(employee.weeklyMinutes)}
            {isOvertime && " ⚠️"}
          </span>
        </div>

        {/* Ligne 2 : Skills */}
        {(employee.skills ?? []).length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {employee.skills.map((skill) => (
              <Badge key={skill} label={skill} color="blue" size="sm" />
            ))}
          </div>
        )}
      </div>

      {/* Actions — visibles au hover */}
      {(onEdit || onDelete) && (
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity flex-shrink-0">
          {onEdit && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onEdit()}
              className="!min-w-[36px] !min-h-[36px] !p-1.5 text-sm"
              aria-label="Éditer"
              title="Éditer"
            >
              ✏️
            </Button>
          )}
          {onDelete && (
            <Button
              size="icon"
              variant="ghost"
              onClick={() => onDelete(employee.id)}
              className="!min-w-[36px] !min-h-[36px] !p-1.5 text-sm text-danger hover:text-danger hover:bg-danger/10 hover:border-danger/30"
              aria-label="Supprimer"
              title="Supprimer"
            >
              🗑️
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default EmployeeCard;
