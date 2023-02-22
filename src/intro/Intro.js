import React from "react";

import "./Intro.css";

const Intro = ({ style }) => {
  return (
    <header className="Intro" style={style}>
      <h1>Hi, I'm Adam! 👋🏼</h1>
      <h2>I am a frontend developer based in NYC.</h2>
      <b>Click on a project below to learn more.</b>
    </header>
  );
};

export default Intro;
