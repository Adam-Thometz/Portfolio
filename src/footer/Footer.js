import React from "react";

import "./Footer.css";

import { PORTFOLIO_GITHUB } from "../_media/urls";

const Footer = ({ style }) => {
  return (
    <footer className="Footer" style={style}>
      <small>Made by Adam Thometz {new Date().getFullYear()}</small>
      <small>
        <a
          className="Footer-link"
          href={PORTFOLIO_GITHUB}
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
