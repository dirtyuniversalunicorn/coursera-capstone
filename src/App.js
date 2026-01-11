import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBookingPage from "./components/ConfirmedBookingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmedBooking" element={<ConfirmedBookingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
