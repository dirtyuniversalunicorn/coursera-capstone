import { useState } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  return (
    <form className="booking-form" aria-labelledby="booking-form-heading">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        aria-required="true"
      >
        <option value="">Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        aria-required="true"
        aria-describedby="guests-help"
      />
      <span id="guests-help" className="visually-hidden">
        Please enter a number between 1 and 10
      </span>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Submit table reservation form"
      />
    </form>
  );
}
