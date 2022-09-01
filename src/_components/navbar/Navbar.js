import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const NavContact = () => {
  const active = ({ isActive }) => `Navbar-link${isActive ? ' active' : ''}`;
  return (
    <nav className="Navbar" id="nav">
      <NavLink className={active} to='/projects'>Projects</NavLink>
      <NavLink className={active} to='/about-me'>About Me</NavLink>
      <NavLink className={active} to='/contact'>Contact</NavLink>
    </nav>
  );
};

export default NavContact;