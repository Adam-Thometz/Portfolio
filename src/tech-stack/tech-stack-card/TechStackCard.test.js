import React from "react";
import { render } from "@testing-library/react";
import TechStackCard from "./TechStackCard";

import jsIcon from "../../_media/tech-stack-icons/javascript.png";

describe("TechStackCard component", () => {
  it("renders without crashing", () => {
    render(<TechStackCard name="Javascript" icon={jsIcon} />);
  });

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <TechStackCard name="Javascript" icon={jsIcon} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
