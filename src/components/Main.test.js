// Main.test.jsx
import { render, act } from "@testing-library/react";
import Main from "./Main";
import React from "react";

describe("Main component", () => {
  const mockTimesToday = ["17:00", "18:00", "19:00"];
  const mockTimesNewDate = ["18:00", "20:00"];

  beforeEach(() => {
    // Mock fetchAPI globally
    window.fetchAPI = jest.fn((date) => {
      // If today, return mockTimesToday, else mockTimesNewDate
      const today = new Date();
      if (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
      ) {
        return mockTimesToday;
      }
      return mockTimesNewDate;
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("initializeTimes sets availableTimes for today", () => {
    let renderedTimes = [];

    render(
      <Main>
        {({ availableTimes }) => {
          renderedTimes = availableTimes;
          return null;
        }}
      </Main>
    );

    expect(renderedTimes).toEqual(mockTimesToday);
    expect(window.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test("updateTimes updates availableTimes for a selected date", () => {
    let renderedTimes = [];
    let updateTimesFn;

    render(
      <Main>
        {({ availableTimes, updateTimes }) => {
          renderedTimes = availableTimes;
          updateTimesFn = updateTimes;
          return null;
        }}
      </Main>
    );

    // Call updateTimes for a new date
    act(() => {
      const newDate = new Date("2026-01-12");
      updateTimesFn(newDate);
    });

    expect(renderedTimes).toEqual(mockTimesNewDate);
    expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  });
});
