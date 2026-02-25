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
      console.warn(
        `localStorage key "${key}" corrompu, reset à la valeur initiale`,
        error,
      );
      return initialValue;
    }
  });

  // useEffect pour synchroniser le state avec le localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`localStorage key "${key}" : écriture impossible`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
