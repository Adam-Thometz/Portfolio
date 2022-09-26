import React from "react";

import "./Intro.css"

const Intro = ({ style }) => {
  return (
    <header className="Intro" style={style}>
      <h1>Hi, I'm Adam! 👋🏼</h1>
      <h2>I am a full-stack developer specializing in frontend technologies based in NYC.</h2>
      <p>As a musician and former educator, I love discovering patterns to make code more efficient and creating delightful and intuitive UIs. Pick a project from below to learn more.</p>
    </header>
  );
};

export default Intro;