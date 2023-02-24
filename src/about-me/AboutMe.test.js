import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "./AboutMe";

describe("AboutMe component", () => {
  it("renders without crashing", () => {
    render(<AboutMe />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
  });
});
