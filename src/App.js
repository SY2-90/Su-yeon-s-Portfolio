import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <About />
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App;
