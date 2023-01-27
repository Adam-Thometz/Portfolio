import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

describe("Contact component", () => {
  it("renders without crashing", () => {
    render(<Contact />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
