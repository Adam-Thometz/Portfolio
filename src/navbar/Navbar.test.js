import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar component", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
