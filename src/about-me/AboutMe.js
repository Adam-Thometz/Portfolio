import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css'
import NavContact from "../_components/navbar-contact/NavContact";
import me from '../_media/imgs/me.jpg';

const AboutMe = () => {
  const goToChromeMusicLab = () => window.open("https://musiclab.chromeexperiments.com");
  const goToResume = () => window.open("https://docs.google.com/document/d/18oRb8BghIT_kmwTY2EXB03Lq9laVucn2t3BIKQmun7Y/edit?usp=sharing");
  return (
    <main className="AboutMe">
      <NavContact />
      <h1 tabIndex={0}>About me</h1>
      <div className="AboutMe-text-img-wrapper">
        <div className="AboutMe-img">
          <img src={me} alt="A light-skinned man with long curly hair and a beard wearing glasses, smiling, wearing a blue and red plaid shirt, and a black shirt with a rainbow-colored 8-bit brain on it with bright graffiti in the background" tabIndex={0}/>
        </div>
        <div className="AboutMe-text" tabIndex={0}>
          <h2>Who am I?</h2>
          <p>Before becoming a software engineer, I worked in a variety of special education settings, most recently as a music teacher for autistic students in grades K-2.</p>
          <p>I've been fascinated by technology's potential since I started producing my own music as a teenager but I was truly inspired to start programming after discovering <Link to="#" onClick={goToChromeMusicLab}>Google's Chrome Music Lab</Link> and trying it out in my music classroom. From that point on, I started teaching myself how to code in Python and Javascript on and off and then eventually, enrolled in Springboard's software engineering program, where I learned about frontend and backend technologies and frameworks.</p>
          <p>When I'm not building (or learning about building) software or composing music, I do martial arts, read anything related to philosophy, tend to my indoor garden, and spend time with my pet blue tongue skink (if you're a reptile lover too, check out Reptifeed in my Projects section!)</p>
          <b>I'm currently seeking a role in frontend web development! <Link to="#" onClick={goToResume}>Click here to check out my resume.</Link></b>
        </div>
      </div>
    </main>
  )
};

export default AboutMe;