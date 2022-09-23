import React from "react";
import Links from "./links/Links";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Links />
      <section>
        <a className='Navbar-link' href='#projects'>Projects</a>
        <a className='Navbar-link' href='#aboutMe'>About Me</a>
        <a className='Navbar-link' href='#contact'>Contact</a>
      </section>
    </nav>
  );
};

export default Navbar;