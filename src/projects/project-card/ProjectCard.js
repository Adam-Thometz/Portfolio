import React from 'react';

import './ProjectCard.css';

const ProjectCard = ({ project, setShownProject }) => {
  const {
    name,
    img,
    shortDescription,
  } = project;
  const cssClass = name.toLowerCase().replace(/ /g, '-').replace('8', 'eight');
  const handleSetShownProject = () => setShownProject(project);

  return (
    <figure className={`ProjectCard ${cssClass}`} onClick={handleSetShownProject}>
      <figcaption>
        <h2>{name}</h2>
        <p>{shortDescription}</p>
      </figcaption>
      <img src={img} alt={name} />
    </figure>
  );
};

export default ProjectCard;