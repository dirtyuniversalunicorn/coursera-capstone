import { useState, useEffect } from "react";

export default function Main({ children }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    if (typeof window.fetchAPI === "function") {
      const today = new Date();
      const times = window.fetchAPI(today);
      setAvailableTimes(times);
      console.log("times:", times);
    } else {
      console.error("fetchAPI is not loaded yet!");
    }
  }, []);

  const updateTimes = (date) => {
    if (typeof window.fetchAPI === "function") {
      const times = window.fetchAPI(date);
      setAvailableTimes(times);
    }
  };

  return <main>{children({ availableTimes, updateTimes })}</main>;
}
