import React from "react";
import { render } from "@testing-library/react";
import Projects from './Projects';

describe('Projects component', () => {
  it('renders without crashing', () => {
    render(<Projects />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
  });
});