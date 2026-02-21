import { useState } from "react";
import { Modal, Button } from "@/components/ui";
import {
  getShiftColorClass,
  calcShiftMinutes,
  formatMinutesToDisplay,
} from "@/utils";
import ShiftForm from "./ShiftForm";

export default function ShiftManager({
  shifts,
  addShift,
  updateShift,
  onDeleteShift,
}) {
  //  state isModalOpen
  const [isModalOpen, setIsModalOpen] = useState(false);
  //  state shiftToEdit (null = création)
  const [shiftToEdit, setShiftToEdit] = useState(null);
  //  handleSaveShift — add ou update selon shiftToEdit
  const handleSaveShift = (shiftData) => {
    if (shiftToEdit) {
      updateShift(shiftData);
    } else {
      addShift(shiftData);
    }

    setIsModalOpen(false);
    setShiftToEdit(null);
  };

  //  handleEditClick — met le shift dans shiftToEdit + ouvre modal
  const handleEditClick = (shift) => {
    setShiftToEdit(shift);
    setIsModalOpen(true);
  };

  //  handleDeleteShift — supprimer shift + assignations orphelines
  const handleDeleteShift = (shiftId) => {
    onDeleteShift(shiftId);
  };

  return (
    <div className="space-y-3">
      {/* Barre d'actions : compteur + bouton ajouter */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-text-secondary">
          {shifts.length} shift{shifts.length > 1 ? "s" : ""}
        </p>
        <Button
          size="sm"
          variant="primary"
          onClick={() => {
            setShiftToEdit(null);
            setIsModalOpen(true);
          }}
        >
          + Ajouter
        </Button>
      </div>

      {/* Liste des shifts */}
      {shifts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <span className="text-5xl mb-3">⏰</span>
          <p className="text-text-muted font-medium">Aucun shift</p>
          <p className="text-text-muted/60 text-sm mt-1">
            Cliquez sur "+ Ajouter" pour commencer
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {shifts.map((shift) => (
            <div
              key={shift.id}
              className={`flex items-center justify-between p-3 rounded-lg border transition-all
                ${getShiftColorClass(shift.type)} hover:shadow-sm`}
            >
              {/* Infos du shift */}
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-text-primary">
                  {shift.name}
                </span>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <span>
                    {shift.startTime} - {shift.endTime}
                  </span>
                  <span className="text-text-muted">•</span>
                  <span>{formatMinutesToDisplay(calcShiftMinutes(shift))}</span>
                  {shift.type === "split" && (
                    <>
                      <span className="text-text-muted">•</span>
                      <span className="text-text-muted">
                        Pause {shift.breakStart} - {shift.breakEnd}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Boutons actions */}
              <div className="flex items-center gap-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleEditClick(shift)}
                >
                  ✏️
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDeleteShift(shift.id)}
                >
                  🗑️
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal avec ShiftForm */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setShiftToEdit(null);
        }}
        title={shiftToEdit ? "✏️ Modifier le shift" : "➕ Nouveau shift"}
        size="md"
      >
        <ShiftForm
          shift={shiftToEdit}
          onSubmit={handleSaveShift}
          onCancel={() => {
            setIsModalOpen(false);
            setShiftToEdit(null);
          }}
        />
      </Modal>
    </div>
  );
}
