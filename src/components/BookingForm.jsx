import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    updateTimes(selectedDate);

    if (selectedDate < new Date().setHours(0, 0, 0, 0)) {
      setErrors((prev) => ({ ...prev, date: "Date cannot be in the past." }));
    } else {
      setErrors((prev) => ({ ...prev, date: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time.";
    if (!guests || guests < 1 || guests > 10)
      newErrors.guests = "Guests must be between 1 and 10.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return; // stop submission if invalid

    const formData = { date, time, guests, occasion };

    if (typeof window.submitAPI === "function") {
      const success = window.submitAPI(formData);

      if (success) {
        setMessage("Reservation successful! ✅");
        navigate("/confirmedBooking");
      } else {
        setMessage("Reservation failed. ❌ Please try again.");
      }
    } else {
      setMessage("submitAPI not available.");
    }
  };

  return (
    <form
      className="booking-form"
      aria-labelledby="booking-form-heading"
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        aria-required="true"
      />
      {errors.date && <span className="error">{errors.date}</span>}

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
      {errors.time && <span className="error">{errors.time}</span>}

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        aria-required="true"
      />
      {errors.guests && <span className="error">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-required="true"
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>
      {errors.occasion && <span className="error">{errors.occasion}</span>}

      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Submit table reservation form"
      />

      {message && <span className="message">{message}</span>}
    </form>
  );
}
