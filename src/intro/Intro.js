import React from "react";

import "./Intro.css"

import Lottie from "react-lottie";
import spinningStack from '../_media/animation/spinning-stack.json'

const Intro = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spinningStack,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <header className="Intro">
      <h1>Hi, I'm Adam! 👋🏼</h1>
      <h2>I am a full-stack developer specializing in frontend technologies based in NYC.</h2>
      <p></p>
    </header>
  );
};

export default Intro;