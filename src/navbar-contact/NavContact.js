import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import './NavContact.css';

const NavContact = () => {
  return (
    <div className="NavContact">
      <Navbar />
      <Contact />
    </div>
  );
};

export default NavContact;