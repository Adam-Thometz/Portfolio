import './App.css';
import { Routes, Route } from 'react-router-dom'
import Intro from './intro/Intro';
import Projects from './projects/Projects';
import NotFound from './NotFound';
import AboutMe from './about-me/AboutMe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Intro />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;