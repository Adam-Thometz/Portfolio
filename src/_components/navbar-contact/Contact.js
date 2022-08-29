import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import './Contact.css';

const Contact = () => {
  const openEmail = () => window.open("mailto:adamthometz@gmail.com");
  const openLinkedIn = () => window.open("https://www.linkedin.com/in/adam-thometz/");
  const openGithub = () => window.open("https://github.com/Adam-Thometz");
  const openSoundcloud = () => window.open("https://soundcloud.com/this-is-psychic-hamster");

  return (
    <div className="Contact">
      <Link className="Contact-link email" to="#" onClick={openEmail}><FontAwesomeIcon title="Email" icon={faEnvelope} /></Link>
      <Link className="Contact-link linkedin" to="#" onClick={openLinkedIn}><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} /></Link>
      <Link className="Contact-link github" to="#" onClick={openGithub}><FontAwesomeIcon title="Github" icon={faGithub} /></Link>
      <Link className="Contact-link soundcloud" to="#" onClick={openSoundcloud}><FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} /></Link>
    </div>
  )
};

export default Contact;