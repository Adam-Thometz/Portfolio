import React from "react";
import { NavLink } from "react-router-dom";
import Links from "./links/Links";
import './Navbar.css';

const Navbar = () => {
  const active = ({ isActive }) => `Navbar-link${isActive ? ' active' : ''}`;
  return (
    <nav className="Navbar">
      <section>
        <NavLink className={active} to='/projects'>Projects</NavLink>
        <NavLink className={active} to='/about-me'>About Me</NavLink>
        <NavLink className={active} to='/contact'>Contact</NavLink>
      </section>
      <Links />
    </nav>
  );
};

export default Navbar;