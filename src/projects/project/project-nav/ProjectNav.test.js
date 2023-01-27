import React from "react";
import { render } from "@testing-library/react";
import ProjectNav from "./ProjectNav";

describe("ProjectNav component", () => {
  it("renders without crashing", () => {
    render(<ProjectNav />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<ProjectNav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
