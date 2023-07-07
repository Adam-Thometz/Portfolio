import { ART_BUDDY, EIGHT_BIT_CLAN, MINTBEAN_STAR, REPTIFEED, VESTA_HEALING, TARA_AI_ASSISTANT } from "../_media/assets";
import {
  AI_ASSISTANT_GITHUB,
  AI_ASSISTANT_URL,
  ART_BUDDY_GITHUB,
  ART_BUDDY_URL,
  EIGHT_BIT_CLAN_GITHUB,
  EIGHT_BIT_CLAN_URL,
  REPTIFEED_GITHUB,
  REPTIFEED_URL,
  VESTA_HEALING_GITHUB,
  VESTA_HEALING_URL
} from "../_media/urls";

const MELODY_PORTFOLIO = "https://melodyux.design/";
const MATTIE_PORTFOLIO = "https://uxfol.io/mattiebecker";

const projects = [
  {
    name: "TARA AI Assistant",
    shortDescription: "An AI-powered Swiss-Army knife for teachers",
    description: (
      <>
        <p>
          An AI-powered tool that is designed to create common teacher materials in seconds. It can generate quizzes, IEP goals, activities, and translations. There is also a chatbot that helps teachers unpack various state standards, which will aid in lesson planning. Designed to help solve the problem of significant administrative burdens placed on teachers.
        </p>
        <b>
          <p>NOTE: This feature is only available if you have a TARA account.</p>
          <p>The Live link will take you to a video of v1 in action</p>
          <p>The Github link will take you to code for the initial quiz generator prototype that got me hired for this role. The demo backend is written in Flask but Django is used in production</p>
        </b>
      </>
    ),
    learnedHowTo: [
      "use the OpenAI API to integrate AI into anything I build",
      "engineer prompts in order to improve output",
      "synthesize user feedback to improve prompts"
    ],
    techStack: ["Vue", "Python", "Django", "Flask"],
    img: TARA_AI_ASSISTANT,
    links: {
      demo: AI_ASSISTANT_URL,
      github: AI_ASSISTANT_GITHUB,
    },
  },
  {
    name: "Vesta Healing Psychotherapy",
    shortDescription: "A website for an NYC-based psychotherapist",
    description: (
      <p>
        This is a simple but interactive website built to advertise the services of a local psychotherapist. Built with UX designer <a href={MELODY_PORTFOLIO}>Melody Acosta</a>
      </p>
    ),
    learnedHowTo: [
      "create micro-interactions and animations",
      "make a responsive navbar",
      "using semantic HTML, ARIA, and keyboard commands to boost accessibility",
      "boost web performance by using tools like Lighthouse",
      "deploy using AWS Amplify",
    ],
    techStack: ["Javascript", "React", "CSS", "AWS"],
    img: VESTA_HEALING,
    links: {
      demo: VESTA_HEALING_URL,
      github: VESTA_HEALING_GITHUB,
    },
  },
  {
    name: "Art Buddy",
    shortDescription: "Arts-based games for special education",
    description: (
      <>
        <p>
          Art Buddy is a collection of arts-based games and tools designed specifically for the special education classroom and reaching students' academic goals.
          I worked with UX designer/fellow educator <a href={MATTIE_PORTFOLIO}>Mattie Becker</a> to make this.
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
    techStack: ["Javascript", "React", "Redux", "CSS", "Jest"],
    img: ART_BUDDY,
    links: {
      demo: ART_BUDDY_URL,
      github: ART_BUDDY_GITHUB,
    },
  },
  {
    name: "8-Bit Clan",
    award: MINTBEAN_STAR,
    shortDescription: "An 8-bit NFT maker. Award winner!",
    description: (
      <p>
        8-Bit Clan is a pixel art maker created for the Mintbean Hiring
        Hackathon, Nov 2021. Create art, save it to your profile, and see if it
        made it to the trending list! Built with UX designer{" "}
        <a href={MELODY_PORTFOLIO}>Melody Acosta</a> in a week. Winner
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
    img: EIGHT_BIT_CLAN,
    links: {
      demo: EIGHT_BIT_CLAN_URL,
      github: EIGHT_BIT_CLAN_GITHUB,
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
    img: REPTIFEED,
    links: {
      demo: REPTIFEED_URL,
      github: REPTIFEED_GITHUB,
    },
  },
];

export default projects;
