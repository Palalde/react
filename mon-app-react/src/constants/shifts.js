// type: "am" = matin | "pm" = après-midi | "full" = journée
// (futur : "split" = coupé)
export const DEFAULT_SHIFTS = [
  {
    id: "matin",
    name: "Matin",
    type: "am",
    startTime: "07:00",
    endTime: "13:30",
    hours: 6.5,
    colorClass: "bg-shift-matin border-shift-matin-border",
  },
  {
    id: "aprem",
    name: "Après-midi",
    type: "pm",
    startTime: "13:30",
    endTime: "20:00",
    hours: 6.5,
    colorClass: "bg-shift-aprem border-shift-aprem-border",
  },
  {
    id: "journee",
    name: "Journée",
    type: "full",
    startTime: "09:00",
    endTime: "18:00",
    hours: 9,
    colorClass: "bg-shift-journee border-shift-journee-border",
  },
];
