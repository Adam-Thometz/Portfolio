import React from "react";

import './Project.css';

import TechStack from "../tech-stack/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "../projectInfo";

const Project = ({ project, setShownProject }) => {
  const exit = () => setShownProject(null);
  const move = e => {
    let projectIdx = projects.findIndex(p => p.name === name);
    projectIdx += e.currentTarget.id === 'next' ? 1 : -1;
    if (projectIdx < 0) projectIdx = projects.length-1;
    if (projectIdx >= projects.length) projectIdx = 0;
    
    const nextProject = projects[projectIdx];
    setShownProject(nextProject);
  };

  const { name, award, description, learnedHowTo, techStack, login, img, links } = project;

  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');

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

  const demo = <FontAwesomeIcon title={`Demo for ${name}`} icon={faGlobe} />;
  const github = <FontAwesomeIcon title={`Github repo for ${name}`} icon={faGithub} />;
  const linkDisplay = <div className="Project-links">
    <a className="demo" href={links.demo} target="_blank" rel="noreferrer">{demo}</a>
    <a className="github" href={links.github} target="_blank" rel="noreferrer">{github}</a>
  </div>;

  return (
    <section className={`Project ${cssClass}`} key={cssClass}>
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
      <div className="Project-nav">
        <FontAwesomeIcon id='prev' title="Previous" icon={faArrowLeft} onClick={move} />
        <button className="Project-exit" onClick={exit}>Back to projects</button>
        <FontAwesomeIcon id="next" title="Next" icon={faArrowRight} onClick={move} />
      </div>
    </section>
  );
};

export default Project;