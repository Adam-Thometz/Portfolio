import React from "react";
import TechStack from "../tech-stack/TechStack";
import techStackInfo from "../tech-stack/techStackInfo";

import "./AboutMe.css";

import { TARA, SOUNDCLOUD, EIGHT_BILLION_MINDS } from "../_media/urls";

const AboutMe = ({ style }) => {
  return (
    <article className="AboutMe" style={style}>
      <h2>About Me</h2>
      <p>

      </p>
      <p>
        I used to teach music at an elementary school for autistic children,
        which is where my love of coding comes from. Working in an underfunded
        school with few instruments, I had to think of creative solutions for
        bringing music into the classroom and technology was the most accessible
        and cost-efficient way of doing that.
      </p>
      {/* <p>
        I became inspired to start coding while compiling resources for my
        classes, which included really fun apps like{" "}
        <a href={CHROME_MUSIC_LAB_URL}>Chrome Music Lab</a> and{" "}
        <a href={MUS_ED_LAB_URL}>MusEdLab</a>. I started with Python and
        eventually decided to enroll in a part-time bootcamp where I learned
        frontend and backend technologies. During my last year of teaching, I
        decided to make my own apps and ended up making Art Buddy, which is in
        continuous production and is used by some of my old colleagues!
      </p> */}
      <p>
        These days, I'm working on AI-powered features for special education teachers at <a href={TARA}>TARA</a>, to be released on July 1st. I'm also...
      </p>
      <ul>
        <li>building Art Buddy</li>
        <li>volunteering to help build <a href={EIGHT_BILLION_MINDS}>8Billionminds</a></li>
        <li>learning artificial intelligence</li>
      </ul>
      <p>
        In my free time, I <a href={SOUNDCLOUD}>produce music</a>, cook, and meditate.
      </p>
      <p>
        If you're looking for a developer who can help you integrate AI into your existing product, <a href="mailto:adamthometz@gmail.com">feel free to contact me</a>!
      </p>
      <h2>My Tech Stack</h2>
      <TechStack techStack={techStackInfo.map(tech => tech.name)} />
    </article>
  );
};

export default AboutMe;
