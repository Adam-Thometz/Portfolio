import React from 'react';
import { Link } from 'react-router-dom';

import './Links.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { links } from '../../_data/navbarInfo';

const Links = () => {
  const openResume = () => window.open(links.resume);
  const openLinkedIn = () => window.open(links.linkedIn);
  const openGithub = () => window.open(links.github);
  // const openSoundcloud = () => window.open(links.soundCloud);

  const resume = <FontAwesomeIcon title="Resume" icon={faFile} />;
  const linkedIn = <FontAwesomeIcon title="LinkedIn" icon={faLinkedin} />;
  const github = <FontAwesomeIcon title="Github" icon={faGithub} />;
  // const soundcloud = <FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} />;

  return (
    <section className='Links'>
      <Link className="Links-link resume" to="" onClick={openResume}>{resume}</Link>
      <Link className="Links-link linkedin" to="" onClick={openLinkedIn}>{linkedIn}</Link>
      <Link className="Links-link github" to="" onClick={openGithub}>{github}</Link>
      {/* <Link className="Links-link soundcloud" to="" onClick={openSoundcloud}>{soundcloud}</Link> */}
    </section>
  );
};

export default Links;