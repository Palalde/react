import { useState } from "react";
import { Input, Button } from "@/components/ui";
import { generateId } from "@/utils";

// formulaire de création/édition d'un employé
export default function EmployeeForm({ employee, onSubmit, onCancel }) {
  // State du formulaire : initialise avec employee si édition, sinon valeurs par défaut
  const [formData, setFormData] = useState(
    employee || {
      name: "",
      color: "#6366F1",
      weeklyHours: 35,
      skills: [],
    },
  );

  // State pour l'erreur de validation
  const [error, setError] = useState("");

  // handleChange générique pour mettre à jour un champ du formulaire
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation : vérifier que le nom n'est pas vide
    if (!formData.name.trim()) {
      setError("Le nom est obligatoire");
      return;
    }

    // Clear error si validation OK
    setError("");

    // Préparer les données de l'employé à envoyer
    const employeeData = employee
      ? { ...formData } // édition : garde l'id existant
      : { ...formData, id: generateId() }; // création : ajoute un id

    onSubmit(employeeData);
  };

  //Rendu du formulaire
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input pour le nom */}
      <Input
        label="Nom complet"
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
        error={error}
        required
        placeholder="Ex: Jean Dupont"
      />

      {/* Input pour la couleur */}
      <Input
        label="Couleur"
        type="color"
        value={formData.color}
        onChange={(value) => handleChange("color", value)}
      />

      {/* Input pour les heures */}
      <Input
        label="Heures/semaine"
        type="number"
        value={formData.weeklyHours}
        onChange={(value) => handleChange("weeklyHours", parseInt(value, 10))}
        required
      />

      {/* Input pour les compétences (MVP simple: string séparée par virgules) */}
      <Input
        label="Compétences"
        value={formData.skills.join(", ")}
        onChange={(value) => {
          const skillsArray = value
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          handleChange("skills", skillsArray);
        }}
        placeholder="Ex: Caisse, Mise en rayon, Boulangerie"
      />

      {/* Boutons d'action */}
      <div className="flex gap-2 justify-end pt-2">
        {/* Bouton Annuler */}
        <Button type="button" variant="secondary" onClick={onCancel}>
          Annuler
        </Button>

        {/* Bouton Soumettre */}
        <Button type="submit">{employee ? "Modifier" : "Créer"}</Button>
      </div>
    </form>
  );
}
