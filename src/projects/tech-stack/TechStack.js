import React from "react";
import techStackInfo from "../../_data/techStackInfo";
import TechStackCard from "./tech-stack-card/TechStackCard";
import './TechStack.css'

const TechStack = ({ techStack }) => {
  return (
    <div className="TechStack">
      <h3>Tech Stack Used</h3>
      <div className="TechStack-main">
        {techStack.map(tech => {
          const { name, icon } = techStackInfo.find(currTech => currTech.name === tech)
          return <TechStackCard name={name} icon={icon} />
        })}
      </div>
    </div>
  );
};

export default TechStack;