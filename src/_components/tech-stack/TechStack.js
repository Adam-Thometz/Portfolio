import React from "react";
import techStackInfo from "./techStackInfo";
import TechStackCard from "./tech-stack-card/TechStackCard";
import './TechStack.css'

const TechStack = ({ techStack }) => {
  return (
    <div className="TechStack">
      <h3>Tech Stack Used</h3>
      <div className="TechStack-main">
        {techStack.map(tech => {
          const t = techStackInfo.find(currTech => currTech.name === tech)
          return <TechStackCard name={t.name} icon={t.icon} />
        })}
      </div>
    </div>
  );
};

export default TechStack;