import React from "react";
import NavContact from "../navbar-contact/NavContact";
import "./Intro.css"
import Lottie from "react-lottie";
import spinningStack from './animation/spinning-stack.json'

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
    <main className="Intro">
      <div className="Intro-header-animation-container">
        <div className="Intro-header" tabIndex={0}> 
          <h1>Hello! My name is Adam Thometz</h1>
          <h2>I am a full-stack developer specializing in front-end web development based in NYC.</h2>
        </div>
        <div className="Intro-animation" tabIndex={-1}>
          <Lottie options={defaultOptions} width={400} height={300} />
        </div>
      </div>

      <div className="Intro-nav">
        <p tabIndex={0}>Pick where you want to go</p>
        <NavContact />
      </div>
    </main>
  );
};

export default Intro;