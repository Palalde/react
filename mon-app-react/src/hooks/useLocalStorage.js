import { useEffect, useState } from "react";

// Hook personnalisé pour gérer le localStorage
export default function useLocalStorage(key, initialValue) {
  // initialiser le state avec default ou valeur du localStorage
  const [value, setValue] = useState(() => {
    try {
      // Vérifier si une valeur existe dans le localStorage
      const storedValue = localStorage.getItem(key);
      // Retourner la valeur stockée ou la valeur initiale
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      // Si les données sont corrompues, on repart avec la valeur initiale
      console.warn(`localStorage key "${key}" corrompu, reset à la valeur initiale`, error);
      return initialValue;
    }
  });

  // useffect pour synchroniser le state avec le localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
