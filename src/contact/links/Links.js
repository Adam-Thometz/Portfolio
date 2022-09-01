import React from 'react';
import { Link } from 'react-router-dom';
import './Links.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  const openLinkedIn = () => window.open("https://www.linkedin.com/in/adam-thometz/");
  const openGithub = () => window.open("https://github.com/Adam-Thometz");
  const openSoundcloud = () => window.open("https://soundcloud.com/this-is-psychic-hamster");
  return (
    <section className='Links'>
      <h2>Find me on the internet</h2>
      <Link className="Links-link linkedin" to="#" onClick={openLinkedIn}><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} /></Link>
      <Link className="Links-link github" to="#" onClick={openGithub}><FontAwesomeIcon title="Github" icon={faGithub} /></Link>
      <Link className="Links-link soundcloud" to="#" onClick={openSoundcloud}><FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} /></Link>
    </section>
  )
}

export default Links