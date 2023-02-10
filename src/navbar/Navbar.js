import React from "react";

import "./Navbar.css";

import links from "./navbarInfo";

const Navbar = ({ style }) => {
  return (
    <nav className="Navbar" style={style}>
      {links.map((link) => {
        const { id, url } = link;
        const name = id[0].toUpperCase() + id.slice(1);
        return (
          <a
            href={url}
            aria-label={`Link to ${name}`}
            className={`Navbar-link ${id}`}
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
