import useLocalStorage from "./useLocalStorage";

export default function useLocalReducer(key, reducer, initialValue) {
  // useLocalStorage pour stocker l'état dans le localStorage
  const [state, setState] = useLocalStorage(key, initialValue);

  //  dispatch qui applique le reducer et met à jour le localStorage
  const dispatch = (action) => setState((prev) => reducer(prev, action));

  return [state, dispatch];
}
