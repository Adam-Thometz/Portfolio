import React from "react";

import "./Intro.css";

import me from "../_media/imgs/adam.webp";

const Intro = ({ style }) => {
  return (
    <header className="Intro" style={style}>
      <section className="Intro-top">
        <aside>
          <h1>Hi, I'm Adam! 👋🏼</h1>
          <h2>I am a frontend developer and music producer based in NYC.</h2>
        </aside>
        <img src={me} alt="the developer" />
      </section>
    </header>
  );
};

export default Intro;
