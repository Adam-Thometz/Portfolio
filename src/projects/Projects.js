import React, { useMemo, useState } from "react";

import './Projects.css';

import projects from "../_data/projectInfo";
import ProjectCard from "./project-card/ProjectCard";

const Projects = ({ style }) => {
  const [shownProject, setShownProject] = useState(null);

  const projectCardDisplay = useMemo(() => (
    projects.map(p => (
      <ProjectCard
        project={p}
        setShownProject={setShownProject}
      />
    ))
  ), []);

  return (
    <section className="Projects" style={style}>
      {shownProject ? (<div className="Projects-current">
        {shownProject}
      </div>) : (<div className="Projects-display">
        {projectCardDisplay}
      </div>)}
    </section>
  );
};

export default Projects;