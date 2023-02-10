import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

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
    url: "https://drive.google.com/file/d/1EjQo4lWpYhJ2M2nsOfeJnh6ZebWKZ0gy/view",
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
