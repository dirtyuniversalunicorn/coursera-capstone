import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  // later: use action.date
  return state;
};

export default function Main({ children }) {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return <main>{children({ availableTimes, dispatch })}</main>;
}
