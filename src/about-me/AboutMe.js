import React from "react";

import './AboutMe.css'

import me from '../_media/imgs/me.jpg';
import { imgAltText, description } from "../_data/aboutMeInfo";

const AboutMe = () => {
  return (
    <main className="AboutMe">
      <div className="AboutMe-img">
        <img src={me} alt={imgAltText} tabIndex={0}/>
      </div>
      <section className="AboutMe-text" tabIndex={0}>
        <h2>Hi, I'm Adam</h2>
        {description}
      </section>
    </main>
  );
};

export default AboutMe;