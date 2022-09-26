import React from "react";

import './Project.css';

import TechStack from "../tech-stack/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../projectInfo";

const Project = ({ project, setShownProject }) => {
  const { name, award, description, learnedHowTo, techStack, login, img, links } = project;
  
  const exit = () => setShownProject(null)
  const move = e => {
    let projectIdx = projects.findIndex(p => p.name === name);
    projectIdx += e.target.id === 'next' ? 1 : -1;
    if (projectIdx < 0) projectIdx = projects.length-1;
    if (projectIdx >= projects.length) projectIdx = 0;

    const nextProject = projects[projectIdx];
    setShownProject(nextProject);
  };

  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');

  const demo = <FontAwesomeIcon title={`Demo for ${name}`} icon={faGlobe} />;
  const github = <FontAwesomeIcon title={`Github repo for ${name}`} icon={faGithub} />;

  const loginDisplay = login ? (
    <div className="Project-login-info">
      <b>To fully explore the app, make your own account or log in with the following:</b>
      <ul>
        <li>Username: {login.username}</li>
        <li>Password: {login.password}</li>
      </ul>
    </div>
  ) : null;

  const awardDisplay = award ? <img className="Project-award" src={award} alt={`An award for ${name}`} /> : null;

  const linkDisplay = <div className="Project-links">
    {links.demo ? <a className="demo" href={links.demo} target="_blank" rel="noreferrer">{demo}</a> : null}
    <a className="github" href={links.github} target="_blank" rel="noreferrer">{github}</a>
  </div>;

  return (
    <section className={`Project ${cssClass}`} key={cssClass}>
      <button className="Project-prev" id="prev" onClick={move}>Previous</button>
      <button className="Project-next" id="next" onClick={move}>Next</button>
      <button className="Project-exit" onClick={exit}>X</button>
      <h1>{name}</h1>
      <div className="Project-info-img-container">
        <div className="Project-img">
          <img src={img} alt={`A screenshot of ${name}`} />
          <TechStack techStack={techStack} />
        </div>
        <div className="Project-info" tabIndex={0}>
          <div className="Project-description">
            <h2>Description</h2>
            {description}
            <h2>Building this taught me how to...</h2>
            <ul>
              {learnedHowTo.map(fact => <li>{fact}</li>)}
            </ul>
            {awardDisplay}
          </div>
          {loginDisplay}
          {linkDisplay}
        </div>
      </div>
    </section>
  );
};

export default Project;