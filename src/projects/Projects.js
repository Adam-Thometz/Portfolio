import React, { useState } from "react";

import "./Projects.css";

import ProjectCard from "./project-card/ProjectCard";
import Project from "./project/Project";
import ProjectNav from "./project/project-nav/ProjectNav";

import projects from "./projectInfo";

const Projects = ({ style }) => {
  const [shownProject, setShownProject] = useState(null);

  const projectCardDisplay = projects.map((p) => (
    <ProjectCard project={p} setShownProject={setShownProject} />
  ));

  const displayClass = shownProject ? "project" : "display";

  return (
    <section className={`Projects ${displayClass}`} style={style}>
      {shownProject ? (
        <>
          <ProjectNav
            currProject={shownProject.name}
            setShownProject={setShownProject}
          />
          <Project project={shownProject} setShownProject={setShownProject} />
        </>
      ) : (
        <>
          <h2>Projects</h2>
          <b>Click on a project below to learn more</b>
          <div className="Projects-project-list">{projectCardDisplay}</div>
        </>
      )}
    </section>
  );
};

export default Projects;
