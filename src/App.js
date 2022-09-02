import './App.css';
import { Routes, Route } from 'react-router-dom';

import Intro from './intro/Intro';
import Projects from './projects/Projects';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import NotFound from './404/NotFound';
import Navbar from './_components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Intro />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar />s
    </div>
  );
};

export default App;