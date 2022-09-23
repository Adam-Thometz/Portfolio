import React from "react";

import './AboutMe.css'

import me from '../_media/imgs/me.jpg';
import { imgAltText, description } from "../_data/aboutMeInfo";

const AboutMe = () => {
  return (
    <section className="AboutMe" id="aboutMe">
        <figure className="AboutMe-img">
        <img src={me} alt={imgAltText} tabIndex={0}/>
      </figure>
      <article className="AboutMe-text" tabIndex={0}>
        {description}
      </article>
    </section>
  );
};

export default AboutMe;