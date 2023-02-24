import React from "react";
import TechStack from "../tech-stack/TechStack";
import techStackInfo from "../tech-stack/techStackInfo";

import "./AboutMe.css";

const CHROME_MUSIC_LAB_URL = "https://musiclab.chromeexperiments.com/";
const MUS_ED_LAB_URL = "https://musedlab.org/";
const SOUNDCLOUD_URL = "https://soundcloud.com/this-is-psychic-hamster";
const EIGHT_BILLION_MINDS = "https://8billionminds.com/";

const AboutMe = ({ style }) => {
  return (
    <article className="AboutMe" style={style}>
      <h2>About me</h2>
      <p>
        I used to teach music at an elementary school for autistic children,
        which is where my love of coding comes from. Working in an underfunded
        school with few instruments, I had to think of creative solutions for
        bringing music into the classroom and technology was the most accessible
        and cost-efficient way of doing that.
      </p>
      <p>
        I became inspired to start coding while compiling resources for my
        classes, which included really fun apps like{" "}
        <a href={CHROME_MUSIC_LAB_URL}>Chrome Music Lab</a> and{" "}
        <a href={MUS_ED_LAB_URL}>MusEdLab</a>. I started with Python and
        eventually decided to enroll in a part-time bootcamp where I learned
        frontend and backend technologies. During my last year of teaching, I
        decided to make my own apps and ended up making Art Buddy, which is in
        continuous production and is used by some of my old colleagues!
      </p>
      <p>
        These days, I'm looking for a role in frontend development. I'm also...
      </p>
      <ul>
        <li>building Art Buddy</li>
        <li>
          volunteering to help build{" "}
          <a href={EIGHT_BILLION_MINDS}>8 Billion Minds</a>
        </li>
        <li>building a website for a local psychotherapist</li>
        <li>learning in-depth computer science</li>
      </ul>
      <p>
        In my free time, I <a href={SOUNDCLOUD_URL}>produce music</a>, cook,
        read, and game.
      </p>
      <h2>My Tech Stack</h2>
      <TechStack techStack={techStackInfo.map((tech) => tech.name)} />
    </article>
  );
};

export default AboutMe;
