import { formatMinutesToDisplay } from "@/utils";

export default function useHoursCalculator(workedMinutes, contractMinutes) {
  // totalMinutes — les minutes travaillées (c'est juste le paramètre !)
  const totalMinutes = workedMinutes;

  // remainingMinutes — combien de minutes restent avant le contrat
  const remainingMinutes = contractMinutes - workedMinutes;

  // isOvertime — booléen, est-ce que workedMinutes > contrat ?
  const isOvertime = workedMinutes > contractMinutes;

  // formatDisplay — string formatée "22h30 / 35h"
  const formatDisplay = `${formatMinutesToDisplay(workedMinutes)} / ${formatMinutesToDisplay(contractMinutes)}`;

  return {
    totalMinutes,
    remainingMinutes,
    isOvertime,
    formatDisplay,
  };
}
