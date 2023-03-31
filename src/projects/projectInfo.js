// Project pictures
import artBuddy from "../_media/imgs/art-buddy.webp";
import vesta from "../_media/imgs/vesta.webp";
import reptifeed from "../_media/imgs/reptifeed.webp";
import bitClan from "../_media/imgs/8-bit-clan.webp";

// Awards
import mintbeanStar from "../_media/imgs/mintbean-star.gif";

const projects = [
  {
    name: "Art Buddy",
    shortDescription: "Arts-based games for special education",
    description: (
      <>
        <p>
          Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals.
          I worked with UX designer/fellow educator <a href="https://uxfol.io/mattiebecker">Mattie Becker</a> to make this.
          <b> I recommend viewing on a desktop. This app was purposely designed for a large screen.</b>
        </p>
        <b>Under construction but usable</b>
      </>
    ),
    learnedHowTo: [
      'make my code readable, obvious, and testable (I call it "making my code ROT")',
      "use package.json scripts to minimize typing in the terminal",
      "make music play in the browser depending on app settings",
      "create a component library of common UI elements",
      "articulate my vision for a product",
      "incorporate user feedback",
    ],
    techStack: ["Javascript", "React", "Redux", "Python", "Flask", "CSS", "Jest"],
    img: artBuddy,
    links: {
      demo: "https://art-buddy.surge.sh",
      github: "https://github.com/Adam-Thometz/Art-Buddy",
    },
  },
  {
    name: "Vesta Healing Psychotherapy",
    shortDescription: "A website for an NYC-based psychotherapist",
    description: (
      <p>
        A simple website built to advertise the services of an NYC-based
        psychotherapist. Built with UX designer <a href="https://melodyux.design/">Melody Acosta</a>
      </p>
    ),
    learnedHowTo: [
      "create micro-interactions and animations",
      "make a responsive navbar",
      "using semantic HTML, ARIA, and keyboard commands to boost accessibility",
      "boost web performance by using tools like Lighthouse",
      "deploy to AWS",
    ],
    techStack: ["Javascript", "React", "CSS", "AWS"],
    img: vesta,
    links: {
      demo: "https://www.vestahealingpsychotherapy.com//",
      github: "https://github.com/Adam-Thometz/Vesta-Healing",
    },
  },
  {
    name: "8-Bit Clan",
    award: mintbeanStar,
    shortDescription: "An 8-bit NFT maker",
    description: (
      <p>
        8-Bit Clan is a pixel art maker created for the Mintbean Hiring
        Hackathon, Nov 2021. Create art, save it to your profile, and see if it
        made it to the trending list! Built with UX designer{" "}
        <a href="https://melodyux.design/">Melody Acosta</a> in a week. Winner
        of Mintbean Star, awarded to top 5% of competitors.
      </p>
    ),
    learnedHowTo: [
      "collaborate with a UX designer",
      "work efficiently under tight time constraints",
      "store art data in a database and call on that data to reproduce a smaller version of that art",
    ],
    techStack: ["Javascript", "Node", "Express", "React", "PostgreSQL"],
    login: {
      username: "abc",
      password: "123",
    },
    img: bitClan,
    links: {
      demo: "https://8-bit-clan.surge.sh/",
      github: "https://github.com/Adam-Thometz/8-Bit-Clan",
    },
  },
  {
    name: "Reptifeed",
    shortDescription: "A reptilian diet tracker",
    description: (
      <p>
        My second and final capstone project for bootcamp. Inspired by my
        blue-tongue skink, Unity, Reptifeed gives you ideas on what to feed your
        reptile and helps you keep track of the foods you have for them.
      </p>
    ),
    learnedHowTo: [
      "build admin-only features",
      "make a website/app accessible",
      "make a responsive website",
      "invent my own API",
    ],
    techStack: [
      "Javascript",
      "Node",
      "Express",
      "React",
      "CSS",
      "PostgreSQL",
      "Jest",
    ],
    login: {
      username: "abc",
      password: "123",
    },
    img: reptifeed,
    links: {
      demo: "https://reptifeed.surge.sh",
      github: "https://github.com/Adam-Thometz/Reptifeed",
    },
  },
];

export default projects;
