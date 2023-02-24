import React from "react";
import techStackInfo from "./techStackInfo";
import TechStackCard from "./tech-stack-card/TechStackCard";
import "./TechStack.css";

const TechStack = ({ techStack }) => {
  return (
    <section className="TechStack">
      {techStack.map((tech) => {
        const { name, icon } = techStackInfo.find(
          (currTech) => currTech.name === tech
        );
        return <TechStackCard name={name} icon={icon} />;
      })}
    </section>
  );
};

export default TechStack;
