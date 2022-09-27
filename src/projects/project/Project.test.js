import React from "react";
import { render } from "@testing-library/react";
import Project from './Project';

import projects from '../projectInfo';

describe('Project component', () => {
  it('renders without crashing', () => {
    render(<Project project={projects[0]} />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Project project={projects[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});