import { timeToMinutes } from "./timeUtils";

/**
 * Map type de shift → classes Tailwind couleur + bordure
 * Donnée dérivée : pas stockée dans le modèle, calculée à la volée
 */
const SHIFT_COLOR_MAP = {
  am: "bg-shift-matin border-shift-matin-border",
  pm: "bg-shift-aprem border-shift-aprem-border",
  full: "bg-shift-journee border-shift-journee-border",
  split: "bg-shift-coupe border-shift-coupe-border",
};

/**
 * Retourne les classes Tailwind de couleur pour un type de shift
 * @param {string} type - "am" | "pm" | "full" | "split"
 * @returns {string} Classes Tailwind (ex: "bg-shift-matin border-shift-matin-border")
 */
export function getShiftColorClass(type) {
  return SHIFT_COLOR_MAP[type] || "bg-bg-tertiary border-border";
}

/**
 * Labels et emojis par type de shift (pour affichage groupé)
 */
const SHIFT_TYPE_META = {
  am: { label: "Matin", emoji: "☀️", order: 0 },
  pm: { label: "Après-midi", emoji: "🌙", order: 1 },
  full: { label: "Journée", emoji: "📅", order: 2 },
  split: { label: "Coupé", emoji: "✂️", order: 3 },
};

/**
 * Groupe les shifts par type et les trie par startTime à l'intérieur de chaque groupe
 * @param {Array} shifts - Tableau de shifts
 * @returns {Array<{ type, label, emoji, shifts }>} Groupes triés
 */
export function groupShiftsByType(shifts) {
  const groups = {};

  shifts.forEach((shift) => {
    if (!groups[shift.type]) {
      const meta = SHIFT_TYPE_META[shift.type] || {
        label: shift.type,
        emoji: "⏰",
        order: 99,
      };
      groups[shift.type] = { type: shift.type, ...meta, shifts: [] };
    }
    groups[shift.type].shifts.push(shift);
  });

  // Trier les groupes par ordre, puis les shifts par startTime
  return Object.values(groups)
    .sort((a, b) => a.order - b.order)
    .map((group) => ({
      ...group,
      shifts: group.shifts.sort((a, b) =>
        a.startTime.localeCompare(b.startTime),
      ),
    }));
}

/**
 * Calcule la durée totale d'un shift en minutes (soustrait la pause si split)
 * @param {object} shift - Objet shift { startTime, endTime, breakStart?, breakEnd? }
 * @returns {number} Durée en minutes
 */
export function calcShiftMinutes(shift) {
  const start = timeToMinutes(shift.startTime);
  const end = timeToMinutes(shift.endTime);
  let total = end - start;

  // Soustraire la pause pour les shifts coupés
  if (shift.breakStart && shift.breakEnd) {
    const breakStartMn = timeToMinutes(shift.breakStart);
    const breakEndMn = timeToMinutes(shift.breakEnd);
    total -= breakEndMn - breakStartMn;
  }

  return total;
}
