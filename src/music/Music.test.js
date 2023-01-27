import React from "react";
import { render } from "@testing-library/react";
import Music from "./Music";

describe("Music component", () => {
  it("renders without crashing", () => {
    render(<Music />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<Music />);
    expect(asFragment()).toMatchSnapshot();
  });
});
