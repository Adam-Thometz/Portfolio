import React from 'react';

import './Navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { links } from './navbarInfo';

const Navbar = ({ style }) => {
  const github = <FontAwesomeIcon icon={faGithub} />;
  const linkedIn = <FontAwesomeIcon icon={faLinkedin} />;
  const resume = <FontAwesomeIcon icon={faFile} />;
  const soundcloud = <FontAwesomeIcon icon={faSoundcloud} />;

  return (
    <nav className='Navbar' style={style}>
      <a className="Navbar-link github" href={links.github} title='Github' target="_blank" rel='noreferrer'>{github}</a>
      <a className="Navbar-link linkedin" href={links.linkedIn} title='LinkedIn' target="_blank" rel='noreferrer'>{linkedIn}</a>
      <a className="Navbar-link resume" href={links.resume} title='Resume' target="_blank" rel='noreferrer'>{resume}</a>
      <a className="Navbar-link soundcloud" href={links.soundCloud} title='Soundcloud' target="_blank" rel='noreferrer'>{soundcloud}</a>
    </nav>
  );
};

export default Navbar;