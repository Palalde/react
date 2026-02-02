import { Card, Badge, Button } from "@/components/ui";

function EmployeeCard({ employee = {}, onEdit, onDelete }) {
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

      {/* Weekly hours */}
      <p className="text-sm text-text-secondary mb-3">
        0 h / {employee.weeklyHours} h
      </p>

      {/* Employee skills */}
      <div className="flex flex-wrap gap-1">
        {employee.skills.map((skill) => (
          <Badge key={skill} label={skill} color="blue" />
        ))}
      </div>
    </Card>
  );
}

export default EmployeeCard;
