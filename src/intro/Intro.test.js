import React from "react";
import { render } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro component", () => {
  it("renders without crashing", () => {
    render(<Intro />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Intro />);
    expect(asFragment()).toMatchSnapshot();
  });
});
