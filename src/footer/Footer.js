import React from 'react'

import './Footer.css';

import Links from './links/Links';

const Footer = () => {
  return (
    <footer className='Footer'>
      <Links />
      <small>Made by Adam Thometz 2022</small>
    </footer>
  );
};

export default Footer;