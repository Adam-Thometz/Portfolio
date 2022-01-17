import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact" tabIndex={0}>
      <Link className="Contact-link email" to="#" onClick={() => window.open("mailto:adamthometz@gmail.com")}><FontAwesomeIcon title="Email" icon={faEnvelope} /></Link>
      <Link className="Contact-link linkedin" to="#" onClick={() => window.open("https://www.linkedin.com/in/adam-thometz/")}><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} /></Link>
      <Link className="Contact-link github" to="#" onClick={() => window.open("https://github.com/Adam-Thometz")}><FontAwesomeIcon title="Github" icon={faGithub} /></Link>
    </div>
  )
};

export default Contact;