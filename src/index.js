import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Intro = lazy(() => import("./intro/Intro"));
const Navbar = lazy(() => import("./navbar/Navbar"));
const AboutMe = lazy(() => import("./about-me/AboutMe"));
const Projects = lazy(() => import("./projects/Projects"));
const Music = lazy(() => import("./music/Music"));
const Footer = lazy(() => import("./footer/Footer"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <>
        <Navbar style={{ "--i": 0 }} />
        <Intro style={{ "--i": 0 }} />
        <AboutMe style={{ "--i": 1 }} />
        <Projects style={{ "--i": 2 }} />
        <Music style={{ '--i': 3 }} />
        <Footer style={{ "--i": 4 }} />
<<<<<<< HEAD
      </>
=======
      </> */}

      <div className="center">
        <img src={makeOver} alt="" />
        <div>
          <p>Going through a makeover. Check back in a week or so!</p>
          <p>In the meantime, check me out elsewhere on the web:</p>
          <Navbar />
          <p>Much love,</p>
          <p>Adam Thometz</p>
        </div>
      </div>
>>>>>>> parent of 0cab3a3 (established deadline)
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
