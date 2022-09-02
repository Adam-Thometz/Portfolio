import React from "react";

import './AboutMe.css'

import me from '../_media/imgs/me.jpg';
import { imgAltText } from "../_data/aboutMeInfo";

const AboutMe = () => {
  return (
    <main className="AboutMe">
      <div className="AboutMe-img">
        <img src={me} alt={imgAltText} tabIndex={0}/>
      </div>
      <section className="AboutMe-text" tabIndex={0}>
        <h2>Hi, I'm Adam</h2>
        <p>I'm a full-stack developer from New York City, born in Brooklyn and living in the Bronx.</p>
        <p>I love building useful and/or delightful apps. Almost everything I've built with code so far had a real purpose. I've built apps for my classes when I worked as a music teacher and for getting a feeding schedule for my new pet lizard going. I felt that this was the best way for me to learn how to code; building CRUD apps in bootcamp just wasn't cutting it for me.</p>
        <p>My approach to coding is </p>
        <p>When I'm not building (or learning about building) software or composing music, I do martial arts, read anything related to philosophy, tend to my indoor garden, and spend time with my pet blue tongue skink (if you're a reptile lover too, check out Reptifeed in my Projects section!)</p>
        <b>I'm currently seeking a role in frontend web development! You can find my resume in the navbar below.</b>
      </section>
    </main>
  );
};

export default AboutMe;