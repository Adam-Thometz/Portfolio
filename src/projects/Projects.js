import React from "react";
import projects from "./project-info";
import Project from "./Project";
import NavContact from "../navbar-contact/NavContact";
import './Projects.css'

const Projects = () => {
  return (
    <main className="Projects">
      <a className="Projects-skip" href="#nav">Skip to navigation</a>
      <h1 className="Projects-header">Projects</h1>
      {projects.map(p => (
        <Project name={p.name} award={p.award} description={p.description} whatILearned={p.whatILearned} techStack={p.techStack} login={p.login} img={p.img} links={p.links} />
      ))}
      <NavContact />
    </main>
  );
};

export default Projects;