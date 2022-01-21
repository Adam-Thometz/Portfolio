import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css'
import NavContact from "../navbar-contact/NavContact";
import me from './imgs/me.jpg'

const AboutMe = () => {
  return (
    <main className="AboutMe">
      <h1 tabIndex={0}>About me</h1>
      <div className="AboutMe-text-img-wrapper">
        <div className="AboutMe-img">
          <img src={me} alt="A man with long curly hair and a beard wearing glasses, smiling, wearing a blue and red plaid shirt, and a black shirt with a rainbow-colored 8-bit brain on it with bright graffiti in the background" tabIndex={0}/>
        </div>
        <div className="AboutMe-text" tabIndex={0}>
          <p>Before becoming a software engineer, I worked in a variety of special education settings, most recently as a music teacher for autistic students in grades K-2.</p>
          <p>I've been fascinated by technology's potential since I started producing my own music as a teenager but I was truly inspired to start programming after discovering <Link to="#" onClick={() => window.open("https://musiclab.chromeexperiments.com")}>Google's Chrome Music Lab</Link> and trying it out in my music classroom in 2019. It was an uncanny combination of my interest in music, technology, and accessibility and I had realized that something was missing in my dream professional toolkit. From that point on, I taught myself how to code in Python and Javascript on and off. Eventually, I decided to take software engineering more seriously as a career and enrolled in Springboard's software engineering program, where I learned about frontend and backend technologies and frameworks.</p>
          <p>When I'm not building (or learning about building) software or composing music, I meditate, cook, do martial arts, read anything related to philosophy, and spend time with my pet blue tongue skink (if you're a reptile lover too, check out Reptifeed in my Projects section!)</p>
          <Link to="#" onClick={() => window.open("https://resume.creddle.io/resume/o9lpco7gae")}>Click here to check out my resume</Link>
        </div>
      </div>
      <NavContact />
    </main>
  )
};

export default AboutMe;