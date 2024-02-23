import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    const { container } = render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
