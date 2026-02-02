import { Card, Badge, Button } from "@/components/ui";

function EmployeeCard({ employee = {}, onEdit, onDelete }) {
  return (
    <Card
      interactive
      title={
        <div className="flex items-center justify-between w-full">
          <span className="truncate">{employee.name}</span>
          <div
            className="w-4 h-4 rounded-full border-2 border-border flex-shrink-0 ml-2"
            style={{ backgroundColor: employee.color }}
            aria-label={`Couleur: ${employee.color}`}
          />
        </div>
      }
    >
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
      {/* bouton d'action */}
      <div className="flex gap-2 pt-2 border-t border-border">
        {/* edit */}
        {onEdit && (
          <Button size="sm" variant="ghost" onClick={() => onEdit(employee)}>
            ✏️
          </Button>
        )}
        {/* delete */}
        {onDelete && (
          <Button
            size="sm"
            variant="danger"
            onClick={() => onDelete(employee.id)}
          >
            🗑️
          </Button>
        )}
      </div>
    </Card>
  );
}

export default EmployeeCard;
