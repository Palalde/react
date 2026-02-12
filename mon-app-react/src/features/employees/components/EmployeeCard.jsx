import { Card, Badge, Button } from "@/components/ui";
import { formatMinutesToDisplay } from "@/utils";

function EmployeeCard({ employee = {}, workedMinutes, onEdit, onDelete }) {
  // calculer si l'employee a trop d'heure
  const isOvertime = workedMinutes > employee.weeklyMinutes;

  return (
    <Card interactive className="group">
      {/* Header custom (plus flexible + actions discrètes) */}
      <div className="-mx-4 -mt-4 px-4 py-3 border-b border-border flex items-center gap-2">
        <div className="min-w-0 flex-1 flex items-center gap-2">
          <span className="truncate font-semibold text-text-primary">
            {employee.name}
          </span>
          <div
            className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0"
            style={{ backgroundColor: employee.color }}
            aria-label={`Couleur: ${employee.color}`}
            title={`Couleur: ${employee.color}`}
          />
        </div>

        {(onEdit || onDelete) && (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity">
            {onEdit && (
              <Button
                size="icon"
                variant="ghost"
                onClick={() => onEdit(employee)}
                className="min-w-[40px] min-h-[40px] p-2"
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
                className="min-w-[40px] min-h-[40px] p-2 text-danger hover:text-danger hover:bg-danger/10 hover:border-danger/30"
                aria-label="Supprimer"
                title="Supprimer"
              >
                🗑️
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Weekly hours with overtime indicator */}
      <div className="flex items-center gap-2 mt-1 mb-3">
        <p
          className={`text-sm ${isOvertime ? "text-danger font-semibold" : "text-text-secondary"}`}
        >
          {formatMinutesToDisplay(workedMinutes)} /{" "}
          {formatMinutesToDisplay(employee.weeklyMinutes)}
        </p>
        {isOvertime && (
          <span
            className="text-xs font-medium text-danger bg-danger/10 rounded-full px-2 py-0.5"
            title="Dépassement d'heures"
          >
            ⚠️
          </span>
        )}
      </div>

      {/* Employee skills */}
      <div className="flex flex-wrap gap-1">
        {(employee.skills ?? []).map((skill) => (
          <Badge key={skill} label={skill} color="blue" />
        ))}
      </div>
    </Card>
  );
}

export default EmployeeCard;
