import { AssignmentCard, AssignmentForm } from "@/features/assignments";
import { DEFAULT_SHIFTS } from "@/constants/shifts";
import { useState } from "react";

function DayColumn({
  day,
  employees,
  assignments,
  onAddAssignment,
  onEditAssignment,
  onDeleteAssignment,
}) {
  // STATES
  // modal state
  const [isFormOpen, setIsFormOpen] = useState(false);
  // Edition state
  const [editingAssignment, setEditingAssignment] = useState(null);

  // HANDLERS
  // edit handler
  const handleEditClick = (assignment) => {
    setEditingAssignment(assignment);
    setIsFormOpen(true);
  };
  // filtrer les assignations pour ce jour
  const dayAssignments = assignments.filter((a) => a.day === day.id);

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

      {/* Zone des assignations  */}
      <div
        onClick={() => setIsFormOpen(true)}
        className="p-2 sm:p-3 min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] bg-bg-primary space-y-2 hover:bg-bg-secondary/50 transition-colors cursor-pointer"
      >
        {dayAssignments.length > 0 ? (
          dayAssignments.map((assignment) => {
            // trouver assignment de l'employé
            const employee = employees.find(
              (emp) => emp.id === assignment.employeeId,
            );
            // trouver le shift de l'employé
            const shift = DEFAULT_SHIFTS.find(
              (sh) => sh.id === assignment.shiftId,
            );
            // GUARD
            if (!employee || !shift) return;
            // lier les deux dans l'assignment card
            return (
              <AssignmentCard
                key={assignment.id}
                employee={employee}
                shift={shift}
                assignment={assignment}
                onEdit={handleEditClick}
                onDelete={onDeleteAssignment}
              />
            );
          })
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center h-full min-h-[150px] sm:min-h-[200px]">
            <span className="text-2xl sm:text-3xl mb-2 opacity-30">📭</span>
            <p className="text-text-muted text-xs sm:text-sm text-center">
              Aucune assignation
            </p>
            <p className="text-text-muted/60 text-xs mt-1 hidden sm:block">
              Cliquez pour ajouter
            </p>
          </div>
        )}
      </div>
      {/* AssignmentForm */}
      {isFormOpen && (
        <AssignmentForm
          employees={employees}
          shifts={DEFAULT_SHIFTS}
          day={day.id}
          onSubmit={editingAssignment ? onEditAssignment : onAddAssignment}
          onClose={() => {
            setIsFormOpen(false);
            setEditingAssignment(null);
          }}
          editingAssignment={editingAssignment}
        />
      )}
    </div>
  );
}

export default DayColumn;
