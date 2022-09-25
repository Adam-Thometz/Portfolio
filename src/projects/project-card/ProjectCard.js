import React from 'react';

import './ProjectCard.css';

import Project from '../project/Project';

const ProjectCard = ({ project, setShownProject }) => {
  const {
    name,
    img,
    shortDescription,
  } = project;
  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');
  const handleSetShownProject = () => {
    const {
      award,
      description,
      learnedHowTo,
      techStack,
      login,
      links
    } = project;
    setShownProject(<Project
      name={name}
      img={img}
      award={award}
      description={description}
      learnedHowTo={learnedHowTo}
      techStack={techStack}
      login={login}
      links={links}
      setShownProject={setShownProject}
    />);
  };
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