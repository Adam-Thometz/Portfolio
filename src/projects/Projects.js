import React, { useMemo, useState } from "react";

import './Projects.css';

import projects from "../_data/projectInfo";
import ProjectCard from "./project-card/ProjectCard";

const Projects = ({ style }) => {
  const [shownProject, setShownProject] = useState(null);

  const projectCardDisplay = useMemo(() => (
    projects.map(p => (
      <ProjectCard
        name={p.name}
        img={p.img}
        shortDescription={p.shortDescription}
        setShownProject={setShownProject}
      />
    ))
  ), []);

  return (
    <section className="Projects" style={style}>
      {shownProject ? shownProject : projectCardDisplay}
    </section>
  );
};

export default Projects;