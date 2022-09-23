import React from 'react';

import './Links.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { links } from '../../_data/navbarInfo';

const Links = () => {
  const resume = <FontAwesomeIcon title="Resume" icon={faFile} />;
  const linkedIn = <FontAwesomeIcon title="LinkedIn" icon={faLinkedin} />;
  const github = <FontAwesomeIcon title="Github" icon={faGithub} />;
  // const soundcloud = <FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} />;

  return (
    <section className='Links'>
      <a className="Links-link resume" href={links.resume} target="_blank" rel='noreferrer'>{resume}</a>
      <a className="Links-link linkedin" href={links.linkedIn} target="_blank" rel='noreferrer'>{linkedIn}</a>
      <a className="Links-link github" href={links.github} target="_blank" rel='noreferrer'>{github}</a>
      {/* <a className="Links-link soundcloud" href={links.soundCloud} target="_blank" rel='noreferrer'>{soundcloud}</a> */}
    </section>
  );
};

export default Links;