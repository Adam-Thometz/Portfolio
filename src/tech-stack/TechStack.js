import React from "react";
import techStackInfo from "./techStackInfo";
import TechStackCard from "./TechStackCard";
import './TechStack.css'

const TechStack = ({ techStack }) => {
  return (
    <div className="TechStack" tabIndex={0}>
      <h3>Tech Stack Used</h3>
      <div className="TechStack-main">
        {techStack.map(tech => {
          const t = techStackInfo.find(currTech => currTech.name === tech)
          console.log(t)
          return <TechStackCard name={t.name} icon={t.icon} />
        })}
      </div>
    </div>
  );
};

export default TechStack;