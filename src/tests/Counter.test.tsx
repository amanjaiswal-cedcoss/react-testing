import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter", () => {
  let counter: HTMLSpanElement;
  let increase: HTMLButtonElement;
  let decrease: HTMLButtonElement;

  test("should render counter value 1 as default value", () => {
    render(<Counter />);
    counter = screen.getByTestId("counter_span");
    expect(counter).toHaveTextContent("1");
  });

  test("should increase and decrease counter value if plus and minus button is pressed respectively", () => {
    render(<Counter />);
    counter=screen.getByTestId('counter_span');
    increase=screen.getByRole('button',{name:'+'})
    decrease=screen.getByRole('button',{name:'-'})
    expect(counter).toHaveTextContent("1");
    fireEvent.click(increase);
    expect(counter).toHaveTextContent("2");
    fireEvent.click(decrease);
    expect(counter).toHaveTextContent("1");
  });

  test("should not decrease counter if counter value is 0", () => {
    expect(counter).toHaveTextContent("1");
    fireEvent.click(decrease);
    expect(counter).toHaveTextContent("1");
  });
});
