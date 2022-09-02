import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './_components/navbar/Navbar';
import Intro from './intro/Intro';
import Projects from './projects/Projects';
import NotFound from './NotFound';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';

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
      <Navbar />
    </div>
  );
};

export default App;