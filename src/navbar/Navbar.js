import React from "react";

import "./Navbar.css";

import links from "./navbarInfo";

const Navbar = ({ style }) => {
  return (
    <nav className="Navbar" style={style}>
      {links.map((link) => {
        const name = link.id[0].toUpperCase() + link.id.slice(1);
        return (
          <a
            href={link.url}
            aria-label={`Link to ${name}`}
            className={`Navbar-link ${link.id}`}
            title={name}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
