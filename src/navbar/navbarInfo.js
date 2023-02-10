import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import resume from "../_media/resume-adam-thometz.pdf";

// function download(url) {
//   fetch(url).then((response) => {
//     response.blob().then((blob) => {
//       console.log(blob);
//       const fileURL = window.URL.createObjectURL(blob);
//       let aLink = document.createElement("a");
//       aLink.href = fileURL;
//       aLink.download = url;
//       aLink.click();
//     });
//   });
// }

const links = [
  {
    id: "resume",
    url: resume,
    icon: <FontAwesomeIcon icon={faFile} />,
    downloadable: true,
  },
  {
    id: "github",
    url: "https://github.com/Adam-Thometz",
    icon: <FontAwesomeIcon icon={faGithub} />,
    downloadable: false,
  },
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/adam-thometz/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
    downloadable: false,
  },
  {
    id: "soundcloud",
    url: "https://soundcloud.com/this-is-psychic-hamster",
    icon: <FontAwesomeIcon icon={faSoundcloud} />,
    downloadable: false,
  },
];

export default links;
