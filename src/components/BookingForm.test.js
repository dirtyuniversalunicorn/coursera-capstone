import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router-dom";

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

describe("BookingForm HTML attributes", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();

  beforeEach(() => {
    // Mock submitAPI
    window.submitAPI = jest.fn(() => true);
  });

  test("date input has required attribute", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select has required attribute", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has min, max, and required attributes", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("occasion select has required attribute", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("BookingForm JS validation", () => {
  const availableTimes = ["17:00", "18:00", "19:00"];
  const mockUpdateTimes = jest.fn();

  beforeEach(() => {
    // Reset mock before each test
    jest.clearAllMocks();
  });

  test("shows error if submitting empty form", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitBtn);

    expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
  });

  test("shows error if guests are below 1 or above 10", () => {
    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: 0 } });

    const submitBtn = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitBtn);

    expect(
      screen.getByText(/guests must be between 1 and 10/i)
    ).toBeInTheDocument();
  });

  test("submits successfully when form is valid", () => {
    window.submitAPI = jest.fn(() => true);

    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-12" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(window.submitAPI).toHaveBeenCalled();
    expect(screen.getByText(/reservation successful/i)).toBeInTheDocument();
  });

  test("shows failure message when submitAPI returns false", () => {
    window.submitAPI = jest.fn(() => false);

    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={mockUpdateTimes}
        />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2026-01-12" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 4 },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /make your reservation/i })
    );

    expect(screen.getByText(/reservation failed/i)).toBeInTheDocument();
  });
});
