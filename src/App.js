
import './App.css';
import Navbar from './component/naveBar';
import Home from './component/home';
import About from './component/about';
import Skills from './component/skill';
import Work from './component/work';
import Contact from './component/contact';

function App() {
  return (
    <>
      <div className='bg-[#0a192f] '>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />

      </div>
    </>
  );
}

export default App;
