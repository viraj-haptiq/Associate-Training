import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cake shop home page", () => {
  render(<App />);
  const headingElement = screen.getByText(/cake shop/i);
  expect(headingElement).toBeInTheDocument();
});
