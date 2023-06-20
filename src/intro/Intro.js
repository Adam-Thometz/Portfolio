import React from "react";

import "./Intro.css";

import { ME } from "../_media/assets";

const Intro = ({ style }) => {
  return (
    <header className="Intro" style={style}>
      <section className="Intro-top">
        <aside>
          <h1>Hi, I'm Adam!</h1>
          <h2>I am a full-stack developer specializing in AI integration.</h2>
        </aside>
        <img src={ME} alt="the developer" />
      </section>
    </header>
  );
};

export default Intro;
