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

  test("should increase counter by 1 when plus button is pressed", () => {
    render(<Counter />);
    counter=screen.getByTestId('counter_span');
    increase=screen.getByRole('button',{name:'+'})
    expect(counter).toHaveTextContent("1");
    fireEvent.click(increase);
    expect(counter).toHaveTextContent("2");
  });

  test("should decrease counter by 1 when minus button is pressed", () => {
    render(<Counter />);
    counter=screen.getByTestId('counter_span');
    decrease=screen.getByRole('button',{name:'-'})
    expect(counter).toHaveTextContent("1");
    fireEvent.click(decrease);
    expect(counter).toHaveTextContent("0");
  });

  test("should not decrease counter if counter value is 0", () => {
    render(<Counter />);
    expect(counter).toHaveTextContent("0");
    fireEvent.click(decrease);
    expect(counter).toHaveTextContent("0");
  });


});
