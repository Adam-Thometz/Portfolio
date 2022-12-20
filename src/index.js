import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Intro = lazy(() => import('./intro/Intro'));
const Navbar = lazy(() => import('./navbar/Navbar'));
const Projects = lazy(() => import('./projects/Projects'));
// const Music = lazy(() => import('./music/Music'));
const Contact = lazy(() => import('./contact/Contact'));
const Footer = lazy(() => import('./footer/Footer'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <>
        <Navbar style={{'--i': 0}} />
        <Intro style={{'--i': 0}} />
        <Projects style={{'--i': 1}} />
        {/* <Music style={{'--i': 2}} /> */}
        <Contact style={{'--i': 2}} />
        <Footer style={{'--i': 3}} />
      </>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);