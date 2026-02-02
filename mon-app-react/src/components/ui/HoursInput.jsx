import { minutesToHoursMinutes, hoursMinutesToMinutes } from "@/utils";

// * HoursInput - Input d'heures et minutes avec 2 champs séparés

// Props:
export default function HoursInput({
  label = "Heures",
  value = "0",
  onChange,
  required = false,
}) {
  const { hours, minutes } = minutesToHoursMinutes(value);

  const handleHoursChange = (newHours) => {
    // Permet la saisie vide temporairement
    if (newHours === "") {
      onChange(hoursMinutesToMinutes(0, minutes));
      return;
    }
    const h = parseInt(newHours, 10);
    if (!isNaN(h)) {
      onChange(hoursMinutesToMinutes(h, minutes));
    }
  };

  const handleMinutesChange = (newMinutes) => {
    // Permet la saisie vide temporairement
    if (newMinutes === "") {
      onChange(hoursMinutesToMinutes(hours, 0));
      return;
    }
    const m = parseInt(newMinutes, 10);
    if (!isNaN(m)) {
      // Limiter à 0-59
      const validMinutes = Math.max(0, Math.min(59, m));
      onChange(hoursMinutesToMinutes(hours, validMinutes));
    }
  };

  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      <label className="text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-danger ml-1">*</span>}
      </label>

      {/* Deux inputs côte à côte */}
      <div className="flex items-center gap-2">
        {/* Heures */}
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="60"
            value={hours === 0 ? "" : hours}
            onChange={(e) => handleHoursChange(e.target.value)}
            onBlur={(e) => {
              // Si vide au blur, remettre 0
              if (e.target.value === "") {
                onChange(hoursMinutesToMinutes(0, minutes));
              }
            }}
            placeholder="0"
            required={required}
            className="
              w-full px-3 py-2 rounded-lg border transition-colors
              bg-bg-primary text-text-primary border-border
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
            "
          />
          <span className="text-xs text-text-muted mt-1 block text-center">
            heures
          </span>
        </div>

        {/* Minutes */}
        <div className="flex-1">
          <input
            type="number"
            min="0"
            max="59"
            step="15"
            value={minutes === 0 ? "" : minutes}
            onChange={(e) => handleMinutesChange(e.target.value)}
            onBlur={(e) => {
              // Si vide au blur, remettre 0
              if (e.target.value === "") {
                onChange(hoursMinutesToMinutes(hours, 0));
              }
            }}
            placeholder="0"
            className="
              w-full px-3 py-2 rounded-lg border transition-colors
              bg-bg-primary text-text-primary border-border
              focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
            "
          />
          <span className="text-xs text-text-muted mt-1 block text-center">
            minutes
          </span>
        </div>
      </div>
    </div>
  );
}
