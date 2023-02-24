import React from "react";
import { render } from "@testing-library/react";
import TechStack from './TechStack';

describe('TechStack component', () => {
  it('renders without crashing', () => {
    render(<TechStack techStack={["Javascript"]} />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<TechStack techStack={["Javascript"]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});