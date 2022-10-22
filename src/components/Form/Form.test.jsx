import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Form from "./Form";

test("Test that a button renders", () => {
  render(<Form/>);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
});