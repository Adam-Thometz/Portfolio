import React from "react";
import { render } from "@testing-library/react";
import Input from './Input';

describe('Input component', () => {
  it('renders without crashing', () => {
    render(<Input />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Input />);
    expect(asFragment()).toMatchSnapshot();
  });
});