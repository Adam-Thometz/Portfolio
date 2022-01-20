import React from "react";
import projects from "./project-info";
import Project from "./Project";
import NavContact from "../navbar-contact/NavContact";
import './Projects.css'

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      {projects.map(p => (
        <Project name={p.name} description={p.description} techStack={p.techStack} img={p.img} links={p.links} />
      ))}
      <div>
        <p tabIndex={0}>Pick where you want to go</p>
        <NavContact />
      </div>
    </div>
  );
};

export default Projects;