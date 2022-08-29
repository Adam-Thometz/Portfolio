import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink className="Navbar-link" to='/projects'>Projects</NavLink>
      <NavLink className="Navbar-link" to='/about-me'>About Me</NavLink>
    </nav>
  );
};

export default Navbar;