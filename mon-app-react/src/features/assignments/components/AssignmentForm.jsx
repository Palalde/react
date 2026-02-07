import { useState } from "react";
import { Modal, Button } from "@/components/ui";

export default function AssignmentForm({
  // props
  employees = [],
  shifts = [],
  day,
  onSubmit,
  onClose,
  editingAssignment,
}) {
  // state du formulaire
  const [formData, setFormData] = useState({
    employeeId: editingAssignment ? editingAssignment.employeeId : "",
    shiftId: editingAssignment ? editingAssignment.shiftId : "",
  });

  // handlers
  const handleSubmit = (e) => {
    // empêcher le rechargement de la page
    e.preventDefault();

    // verifier que tous les champs sont remplis
    if (!formData.employeeId || !formData.shiftId) {
      console.error("Veuillez remplir tous les champs");
      return;
    }
    // soumettre les données
    try {
      // {employeeId, shiftId, day, id}
      onSubmit({
        // employeeID et shiftId du formulaire
        ...formData,
        // jour de l'assignation
        day,
        // si edition ajouter l'id
        ...(editingAssignment && { id: editingAssignment.id }),
      });
      // fermer le formulaire
      onClose();
    } catch (error) {
      // gérer les erreurs
      console.error("Erreur lors de la soumission:", error);
    }
  };

  return (
    <Modal
      isOpen={true}
      onClose={onClose}
      title={editingAssignment ? "✏️ Modifier" : " + Ajouter"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Sélection d'employé */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Employé
          </label>
          {/* selecteur */}
          <select
            // value et onChange pour gérer le state du formulaire
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({ ...formData, employeeId: e.target.value })
            }
            className="w-full px-3 py-2 border border-border rounded-lg bg-bg-primary text-text-primary"
          >
            {/* map pour afficher les options d'employés */}
            <option value="">Choisir un employé</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        {/* selection de shift*/}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Shift
          </label>
          {/* selecteur */}
          <select
            //value et onChange pour gérer le state du formulaire
            value={formData.shiftId}
            onChange={(e) =>
              setFormData({ ...formData, shiftId: e.target.value })
            }
            className="w-full px-3 py-2 border border-border rounded-lg bg-bg-primary text-text-primary"
          >
            {/* map pour afficher les options de shifts */}
            <option value="">Choisir un shift</option>
            {shifts.map((shift) => (
              <option key={shift.id} value={shift.id}>
                {shift.name}
              </option>
            ))}
          </select>
        </div>
        {/* Bouton de soumission */}
        <div className="flex justify-end gap-2 pt-4">
          <Button variant="ghost" onClick={onClose}>
            Annuler
          </Button>
          <Button type="submit">
            {/* "Créer" ou "Modifier" selon le mode */}
            {editingAssignment ? "✏️ Modifier" : " + Ajouter"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
