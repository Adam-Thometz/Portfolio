import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

import projects from "../projectInfo";

describe("ProjectCard component", () => {
  it("renders without crashing", () => {
    render(<ProjectCard project={projects[0]} />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(<ProjectCard project={projects[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
