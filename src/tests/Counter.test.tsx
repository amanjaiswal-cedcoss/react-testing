import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

let counterValue: string | null;
let increaseCount: HTMLButtonElement;
let decreaseCount: HTMLButtonElement;

describe("Counter", () => {
  test("renders 1 as initial value", () => {
    render(<Counter />);
    counterValue = screen.getByTestId("counter_span").textContent;
    increaseCount = screen.getByRole("button", { name: "+" });
    decreaseCount = screen.getByRole("button", { name: "-" });
    expect(counterValue).toBe("1");
  });

  test("should increase count by 1 when plus button is clicked", () => {
    expect(counterValue).toBe("1");
    fireEvent.click(increaseCount);
    expect(counterValue).toBe("1");
  });

  test("should decrease count by 1 when minus button is clicked", () => {
    expect(counterValue).toBe("1");
    fireEvent.click(decreaseCount);
    expect(counterValue).toBe("1");
  });

  test("should not decrease count if counter value is 0", () => {
    expect(counterValue).toBe("1");
    fireEvent.click(decreaseCount);
    expect(counterValue).toBe("1");
  });
});
