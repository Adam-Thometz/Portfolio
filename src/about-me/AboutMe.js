import React from "react";

import './AboutMe.css'

import me from '../_media/imgs/me.jpg';
import { imgAltText, description } from "../_data/aboutMeInfo";
import Navbar from "../navbar/Navbar";

const AboutMe = () => {
  return (
    <main className="AboutMe">
      <Navbar />
      <section className="AboutMe-info-wrapper">
        <figure className="AboutMe-img">
          <img src={me} alt={imgAltText} tabIndex={0}/>
        </figure>
        <article className="AboutMe-text" tabIndex={0}>
          {description}
        </article>
      </section>
    </main>
  );
};

export default AboutMe;