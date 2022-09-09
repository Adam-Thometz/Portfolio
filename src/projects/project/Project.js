import React from "react";
import { Link } from "react-router-dom";

import TechStack from "../tech-stack/TechStack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './Project.css';

const Project = ({ name, award, description, learnedHowTo, techStack, login, img, links }) => {
  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');

  const openDemo = () => window.open(links.demo);
  const openGithub = () => window.open(links.github);

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
    {links.demo ? <Link className="demo" to="" onClick={openDemo}>{demo}</Link> : null}
    <Link className="github" to="" onClick={openGithub}>{github}</Link>
  </div>;

  return (
    <div className={`Project ${cssClass}`} key={cssClass}>
      <h1>{name}</h1>
      <div className="Project-info-img-container">
        <div className="Project-img">
          {linkDisplay}
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
        </div>
      </div>
    </div>
  );
};

export default Project;