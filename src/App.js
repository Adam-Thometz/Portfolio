import './App.css';

import Intro from './intro/Intro';
import Projects from './projects/Projects';
import AboutMe from './about-me/AboutMe';
import Contact from './contact/Contact';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Intro />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
};

export default App;