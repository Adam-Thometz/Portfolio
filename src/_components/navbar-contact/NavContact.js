import React from "react";
import { NavLink } from "react-router-dom";
import './NavContact.css';

const NavContact = () => {
  return (
    <nav className="NavContact" id="nav">
      <NavLink className="Navbar-link" to='/projects'>Projects</NavLink>
      <NavLink className="Navbar-link" to='/about-me'>About Me</NavLink>
      <NavLink className="Navbar-link" to='/contact'>Contact</NavLink>
    </nav>
  );
};

export default NavContact;