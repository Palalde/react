export default function AssignmentCard({
  employee,
  shift,
  assignment,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className="relative p-2 sm:p-3 rounded-lg bg-bg-primary border-l-4 shadow-sm hover:shadow-md transition-all duration-200 group"
      style={{ borderLeftColor: employee.color }}
    >
      {/* Nom employé */}
      <h3 className="font-medium text-sm text-text-primary truncate pr-12">
        {employee.name}
      </h3>

      {/* Shift + horaires */}
      <p className="text-xs text-text-secondary mt-0.5">
        {shift.name} ({shift.startTime} - {shift.endTime})
      </p>

      {/* Boutons edit/delete - visibles au hover */}
      <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-1.5 rounded hover:bg-bg-secondary text-text-secondary hover:text-text-primary transition-colors"
          onClick={() => onEdit(assignment.id)}
          aria-label="Modifier l'assignation"
        >
          ✏️
        </button>
        <button
          className="p-1.5 rounded hover:bg-danger/10 text-text-secondary hover:text-danger transition-colors"
          onClick={() => onDelete(assignment.id)}
          aria-label="Supprimer l'assignation"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
