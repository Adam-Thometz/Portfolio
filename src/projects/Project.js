import React from "react";
import { Link } from "react-router-dom";
import TechStack from "../tech-stack/TechStack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import './Project.css';

const Project = ({name, award, description, techStack, login, img, links}) => {
  const cssClass = name.toLowerCase().replaceAll(' ', '-').replace('8', 'eight');

  return (
    <div className={`Project ${cssClass}`} key={cssClass}>
      <h2>{name}</h2>
      <div className="Project-info-img-container">
        <div className="Project-info" tabIndex={0}>
          <div className="Project-description">
            <h3>Description</h3>
            <p>{description}</p>
            {award ? <img className="Project-award" src={award} alt={`An award for ${name}`} /> : null}
          </div>
          <div className="Project-links">
            <Link className="demo" to="" onClick={() => window.open(links.demo)}><FontAwesomeIcon title={`Demo for ${name}`} icon={faGlobe} /></Link>
            <Link className="github" to="" onClick={() => window.open(links.github)}><FontAwesomeIcon title={`Github repo for ${name}`} icon={faGithub} /></Link>

            {login ? (
              <div>
                <b>To get the most out of this site, log in with the following:</b>
                <ul>
                  <li>Username: {login.username}</li>
                  <li>Password: {login.password}</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
        <div className="Project-img">
          <img src={img} alt={`A screenshot of ${name}`} />
        </div>
      </div>
      <TechStack techStack={techStack} />
    </div>
  );
};

export default Project;