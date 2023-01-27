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
    url: "https://docs.google.com/document/d/18oRb8BghIT_kmwTY2EXB03Lq9laVucn2t3BIKQmun7Y/edit?usp=sharing",
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
