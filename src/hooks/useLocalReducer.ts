import { Dispatch, Reducer } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useLocalReducer<T, A>(
  key: string,
  reducer: Reducer<T, A>,
  initialValue: T,
): [T, Dispatch<A>] {
  // useLocalStorage pour stocker l'état dans le localStorage
  const [state, setState] = useLocalStorage(key, initialValue);

  //  dispatch qui applique le reducer et met à jour le localStorage
  const dispatch: Dispatch<A> = (action) =>
    setState((prev) => reducer(prev, action));

  return [state, dispatch];
}
