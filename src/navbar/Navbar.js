import React from 'react';

import './Navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { links } from '../_data/navbarInfo';

const Navbar = ({ style }) => {
  const resume = <FontAwesomeIcon title="Resume" icon={faFile} />;
  const linkedIn = <FontAwesomeIcon title="LinkedIn" icon={faLinkedin} />;
  const github = <FontAwesomeIcon title="Github" icon={faGithub} />;
  const soundcloud = <FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} />;

  return (
    <nav className='Navbar' style={style}>
      <a className="Navbar-link github" href={links.github} target="_blank" rel='noreferrer'>{github}</a>
      <a className="Navbar-link linkedin" href={links.linkedIn} target="_blank" rel='noreferrer'>{linkedIn}</a>
      <a className="Navbar-link resume" href={links.resume} target="_blank" rel='noreferrer'>{resume}</a>
      <a className="Navbar-link soundcloud" href={links.soundCloud} target="_blank" rel='noreferrer'>{soundcloud}</a>
    </nav>
  );
};

export default Navbar;