import { useState } from "react";
import { Input, Button, ColorInput, HoursInput } from "@/components/ui";
import { getAvailableColor } from "@/utils";

// formulaire de création/édition d'un employé
export default function EmployeeForm({
  employee,
  employees = [],
  onSubmit,
  onCancel,
}) {
  // State du formulaire : initialise avec employee si édition, sinon valeurs par défaut
  const [formData, setFormData] = useState(
    employee || {
      name: "",
      color: getAvailableColor(employees), // Couleur intelligente !
      weeklyMinutes: 2100, // 35h00 par défaut
      skills: [],
    },
  );

  // State pour l'erreur de validation
  const [error, setError] = useState("");

  // State local pour l'input des skills (string brute pendant la saisie)
  const [skillsInput, setSkillsInput] = useState(formData.skills.join(", "));

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

    // Convertir skillsInput (string) en array pour l'employé
    const skillsArray = skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // Préparer les données de l'employé à envoyer
    const employeeData = employee
      ? { ...formData, skills: skillsArray } // édition : garde l'id existant
      : { ...formData, skills: skillsArray }; // création : ajoute un id

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

      {/* Input pour la couleur avec prévisualisation */}
      <ColorInput
        label="Couleur"
        value={formData.color}
        onChange={(value) => handleChange("color", value)}
      />

      {/* Input pour les heures avec minutes */}
      <HoursInput
        label="Heures / semaine"
        value={formData.weeklyMinutes}
        onChange={(value) => handleChange("weeklyMinutes", value)}
        required
      />

      {/* Input pour les compétences (MVP simple: string séparée par virgules) */}
      <Input
        label="Compétences (séparées par des virgules)"
        value={skillsInput}
        onChange={setSkillsInput}
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
