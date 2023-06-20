import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { GITHUB, LINKEDIN, YOUTUBE, SOUNDCLOUD } from "../_media/urls";

// for resume
// import { faFile } from "@fortawesome/free-solid-svg-icons";

const links = [
  // one day I will make a downloadable resume
  // {
  //   id: "resume",
  //   url: "https://drive.google.com/file/d/1SSBbcmRqGI-DkNfYVJtBJCQHEeq53PSV/view?usp=share_link",
  //   icon: <FontAwesomeIcon icon={faFile} />,
  // },
  {
    id: "github",
    url: GITHUB,
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: "linkedin",
    url: LINKEDIN,
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    id: "youtube",
    url: YOUTUBE,
    icon: <FontAwesomeIcon icon={faYoutube} />,
  },
  {
    id: "soundcloud",
    url: SOUNDCLOUD,
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
  },
];

export default links;
