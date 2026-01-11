import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm submission", () => {
  test("calls onSubmit when form is submitted", () => {
    const mockDispatch = jest.fn();
    const mockSubmit = jest.fn((e) => e.preventDefault());

    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={mockDispatch}
        onSubmit={mockSubmit}
      />
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-20" },
    });

    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "2" },
    });

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-20" },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2026-01-20",
    });
  });
});
