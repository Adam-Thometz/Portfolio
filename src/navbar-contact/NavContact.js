import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './NavContact.css';

const NavContact = () => {
  return (
    <nav className="NavContact" id="nav">
      <Navbar />
      <Contact />
    </nav>
  );
};

export default NavContact;