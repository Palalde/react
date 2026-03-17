import { useEffect, useState, Dispatch, SetStateAction } from "react";

/**

 * @param key localStorage key
 * @param initialValue initial value if localStorage is empty or corrupted
 * @returns [value, setValue] tuple
 */
export default function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.warn(
        `localStorage key "${key}" corrompu, reset à la valeur initiale`,
        error,
      );

      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`localStorage key "${key}" : écriture impossible`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
