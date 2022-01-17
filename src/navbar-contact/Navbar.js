import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link className="projects" to='/projects'>Projects</Link>
      <Link className="about-me" to='/about-me'>About Me</Link>
    </nav>
  );
};

export default Navbar;