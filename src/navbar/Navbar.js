import React from 'react';

import './Navbar.css';

import links from './navbarInfo';

const Navbar = ({ style }) => {
  return (
    <nav className='Navbar' style={style}>
      {links.map(link => (
        <a
          href={link.url}
          aria-label={`Link to ${link.id}`}
          className={`Navbar-link ${link.id}`}
          title={link.id}
          target="_blank"
          rel='noreferrer'
        >{link.icon}</a>
      ))}
    </nav>
  );
};

export default Navbar;