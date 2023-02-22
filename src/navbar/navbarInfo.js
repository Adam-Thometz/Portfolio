import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: "resume",
    url: "https://drive.google.com/file/d/1SSBbcmRqGI-DkNfYVJtBJCQHEeq53PSV/view?usp=share_link",
    icon: <FontAwesomeIcon icon={faFile} />,
  },
  {
    id: "github",
    url: "https://github.com/Adam-Thometz",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/adam-thometz/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    id: "soundcloud",
    url: "https://soundcloud.com/this-is-psychic-hamster",
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
  },
];

export default links;
