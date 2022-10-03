import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSoundcloud, faTwitter } from '@fortawesome/free-brands-svg-icons';

const links = [
  {
    id: 'github',
    url: "https://github.com/Adam-Thometz",
    icon: <FontAwesomeIcon icon={faGithub} />
  },
  {
    id: 'linkedin',
    url: "https://www.linkedin.com/in/adam-thometz/",
    icon: <FontAwesomeIcon icon={faLinkedin} />
  },
  {
    id: 'twitter',
    url: "https://twitter.com/code_to_joy",
    icon: <FontAwesomeIcon icon={faTwitter} />
  },
  {
    id: 'soundcloud',
    url: "https://soundcloud.com/this-is-psychic-hamster",
    icon: <FontAwesomeIcon icon={faSoundcloud} />
  }
];

export default links;