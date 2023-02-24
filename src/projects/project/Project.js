import React from "react";

import "./Project.css";

import TechStack from "../../tech-stack/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ project }) => {
  const {
    name,
    award,
    description,
    learnedHowTo,
    techStack,
    login,
    img,
    links,
  } = project;

  const cssClass = name.toLowerCase().replace(/ /g, "-").replace("8", "eight");

  const loginDisplay = login ? (
    <div className="Project-login-info">
      <b>
        To fully explore the app, make your own account or log in with the
        following:
      </b>
      <ul>
        <li>Username: {login.username}</li>
        <li>Password: {login.password}</li>
      </ul>
    </div>
  ) : null;

  const awardDisplay = award ? (
    <img className="Project-award" src={award} alt={`An award for ${name}`} />
  ) : null;

  const linkDisplay = (
    <div className="Project-links">
      <a
        className="demo"
        title={`Demo for ${name}`}
        href={links.demo}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGlobe} />
      </a>
      <a
        className="github"
        title={`Github repo for ${name}`}
        href={links.github}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );

  return (
    <section className={`Project ${cssClass}`} key={cssClass}>
      <h1>{name}</h1>
      <div className="Project-info-img-container">
        <div className="Project-img">
          <img src={img} alt={`A screenshot of ${name}`} />
          <TechStack techStack={techStack} />
        </div>
        <div className="Project-info">
          <div className="Project-description">
            <h2>Description</h2>
            {description}
            <h2>Building this taught me how to...</h2>
            <ul>
              {learnedHowTo.map((fact) => (
                <li>{fact}</li>
              ))}
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
