import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Intro = lazy(() => import('./intro/Intro'));
const Navbar = lazy(() => import('./navbar/Navbar'));
const Projects = lazy(() => import('./projects/Projects'));
const Contact = lazy(() => import('./contact/Contact'));
const Footer = lazy(() => import('./footer/Footer'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className='App'>
        <Navbar style={{'--i': 0}} />
        <Intro style={{'--i': 0}} />
        <Projects style={{'--i': 1}} />
        <Contact style={{'--i': 2}} />
        <Footer style={{'--i': 3}} />
      </div>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);