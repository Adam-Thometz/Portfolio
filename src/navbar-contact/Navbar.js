import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink className="projects" to='/projects'>Projects</NavLink>
      <NavLink className="about-me" to='/about-me'>About Me</NavLink>
    </nav>
  );
};

export default Navbar;