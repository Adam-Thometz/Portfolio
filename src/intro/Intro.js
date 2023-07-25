import React from "react";

import "./Intro.css";

import { ME } from "../_assets/assets";

const Intro = ({ style }) => {
  return (
    <header className="Intro" style={style}>
      <section className="Intro-top">
        <aside>
          <h1>Hi, I'm Adam!</h1>
          <p>I am a full-stack developer based in NYC.</p>
        </aside>
        <img src={ME} alt="the developer" />
      </section>
    </header>
  );
};

export default Intro;
