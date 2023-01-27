import React from "react";

import "./ProjectCard.css";

const ProjectCard = ({ project, setShownProject }) => {
  const { name, img, shortDescription } = project;
  const cssClass = name.toLowerCase().replace(/ /g, "-").replace("8", "eight");
  const handleSetShownProject = () => setShownProject(project);

  return (
    <button
      tabIndex={0}
      className={`ProjectCard ${cssClass}`}
      onClick={handleSetShownProject}
    >
      <div className="ProjectCard-name">
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </div>
      <img src={img} alt={name} />
    </button>
  );
};

export default ProjectCard;
