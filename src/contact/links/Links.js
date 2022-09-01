import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  const openLinkedIn = () => window.open("https://www.linkedin.com/in/adam-thometz/");
  const openGithub = () => window.open("https://github.com/Adam-Thometz");
  const openSoundcloud = () => window.open("https://soundcloud.com/this-is-psychic-hamster");
  return (
    <div>
      <h2>Find me on the internet</h2>
      <Link className="Contact-link linkedin" to="#" onClick={openLinkedIn}><FontAwesomeIcon title="LinkedIn" icon={faLinkedin} /></Link>
      <Link className="Contact-link github" to="#" onClick={openGithub}><FontAwesomeIcon title="Github" icon={faGithub} /></Link>
      <Link className="Contact-link soundcloud" to="#" onClick={openSoundcloud}><FontAwesomeIcon title="Soundcloud" icon={faSoundcloud} /></Link>
    </div>
  )
}

export default Links