import React from "react";

import "./Footer.css";

const Footer = ({ style }) => {
  return (
    <footer className="Footer" style={style}>
      <small>Made by Adam Thometz {new Date().getFullYear()}</small>
      <small>
        <a
          className="Footer-link"
          href="https://github.com/Adam-Thometz/Portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Like this portfolio? Click here to check out the Github.
        </a>
      </small>
    </footer>
  );
};

export default Footer;
