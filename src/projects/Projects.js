import React from "react";

import './Projects.css';

import Project from "./project/Project";

import projects from "../_data/projectInfo";
import ProjectCard from "./project-card/ProjectCard";

const Projects = () => {
  const projectDisplay = projects.map(p => (
    <Project
      name={p.name}
      award={p.award}
      description={p.description}
      learnedHowTo={p.learnedHowTo}
      techStack={p.techStack}
      login={p.login}
      img={p.img}
      links={p.links}
    />
  ));

  const projectCardDisplay = projects.map(p => (
    <ProjectCard
      name={p.name}
      img={p.img}
      shortDescription={p.shortDescription}
    />
  ))

  return (
    <section className="Projects" id="projects">
      <h2>Projects</h2>
      <p>Click on a project to learn more.</p>
      <section className="Projects-display">
        {projectCardDisplay}
      {/* {projectDisplay} */}
      </section>
    </section>
  );
};

export default Projects;