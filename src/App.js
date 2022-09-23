import './App.css';

import Intro from './intro/Intro';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;