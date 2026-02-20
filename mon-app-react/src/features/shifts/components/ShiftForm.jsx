import { useState } from "react";
import { Input, Button } from "@/components/ui";

// Options du sélecteur de type
const SHIFT_TYPES = [
  { value: "am", label: "☀️ Matin" },
  { value: "pm", label: "🌙 Après-midi" },
  { value: "full", label: "📅 Journée" },
  { value: "split", label: "✂️ Coupé" },
];

export default function ShiftForm({ shift, onSubmit, onCancel }) {
  // state du formulaire
  const [formData, setFormData] = useState(
    shift || {
      name: "",
      type: "am",
      startTime: "",
      endTime: "",
      breakStart: "",
      breakEnd: "",
    },
  );
  // State pour l'erreur de validation
  const [error, setError] = useState("");

  // handleChange générique pour mettre à jour un champ du formulaire
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // handleSubmit avec preventDefault
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation : vérifier que les champs obligatoires sont remplis
    if (!formData.name.trim()) {
      setError("Le nom est obligatoire");
      return;
    }
    if (!formData.startTime || !formData.endTime) {
      setError("Les horaires sont obligatoires");
      return;
    }
    if (
      formData.type === "split" &&
      (!formData.breakStart || !formData.breakEnd)
    ) {
      setError("Les horaires de pause sont obligatoires pour un shift coupé");
      return;
    }

    // Clear error si validation OK
    setError("");

    // Préparer les données : retirer breakStart/breakEnd si pas split
    const { name, type, startTime, endTime } = formData;
    const submitData =
      formData.type === "split" ? formData : { name, type, startTime, endTime };
    onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nom du shift */}
      <Input
        label="Nom du shift"
        value={formData.name}
        onChange={(value) => handleChange("name", value)}
        required
        placeholder="Ex: Matin 6h"
      />

      {/* Sélecteur de type */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-text-primary">
          Type <span className="text-danger ml-1">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {SHIFT_TYPES.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => handleChange("type", t.value)}
              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-all
                ${
                  formData.type === t.value
                    ? "border-accent bg-accent-soft text-accent ring-2 ring-accent/30"
                    : "border-border bg-bg-primary text-text-secondary hover:border-border-hover hover:bg-bg-tertiary"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Horaires : startTime + endTime côte à côte */}
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Début"
          type="time"
          value={formData.startTime}
          onChange={(value) => handleChange("startTime", value)}
          required
        />
        <Input
          label="Fin"
          type="time"
          value={formData.endTime}
          onChange={(value) => handleChange("endTime", value)}
          required
        />
      </div>

      {/* Pause : breakStart + breakEnd — seulement si type === "split" */}
      {formData.type === "split" && (
        <div className="space-y-3 p-3 rounded-lg border border-dashed border-shift-coupe-border bg-shift-coupe/30">
          <p className="text-xs font-medium text-text-secondary">
            Horaires de pause
          </p>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Début pause"
              type="time"
              value={formData.breakStart || ""}
              onChange={(value) => handleChange("breakStart", value)}
              required
            />
            <Input
              label="Fin pause"
              type="time"
              value={formData.breakEnd || ""}
              onChange={(value) => handleChange("breakEnd", value)}
              required
            />
          </div>
        </div>
      )}

      {/* Erreur globale */}
      {error && (
        <p className="text-sm text-danger bg-danger/10 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Boutons */}
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="secondary"
          className="flex-1"
          onClick={onCancel}
        >
          Annuler
        </Button>
        <Button type="submit" variant="primary" className="flex-1">
          {shift ? "Modifier" : "Créer"}
        </Button>
      </div>
    </form>
  );
}
