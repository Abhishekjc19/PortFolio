import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111111] via-[#222222] to-[#111111]">
      {/* Mobile menu button */}
      <button 
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/70 backdrop-blur-md text-white lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center lg:hidden">
          <nav className="flex flex-col items-center gap-8 text-xl">
            <a href="#about" className="text-white hover:text-[#FFD100] transition duration-300" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="text-white hover:text-[#FFD100] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#skills" className="text-white hover:text-[#FFD100] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#education" className="text-white hover:text-[#FFD100] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Education</a>
            <a href="#contact" className="text-white hover:text-[#FFD100] transition duration-300" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}

      {/* Desktop navbar */}
      <Navbar isScrolled={isScrolled} />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;