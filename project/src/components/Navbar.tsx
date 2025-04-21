import { useEffect, useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'education'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''} hidden lg:block`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-[#FFD100]">A</span>bhishek
        </a>
        
        <div className="flex items-center space-x-8">
          <a 
            href="#about" 
            className={`${activeSection === 'about' ? 'text-[#FFD100]' : 'text-white'} hover:text-[#FFD100] transition-colors duration-300`}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`${activeSection === 'projects' ? 'text-[#FFD100]' : 'text-white'} hover:text-[#FFD100] transition-colors duration-300`}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className={`${activeSection === 'skills' ? 'text-[#FFD100]' : 'text-white'} hover:text-[#FFD100] transition-colors duration-300`}
          >
            Skills
          </a>
          <a 
            href="#education" 
            className={`${activeSection === 'education' ? 'text-[#FFD100]' : 'text-white'} hover:text-[#FFD100] transition-colors duration-300`}
          >
            Education
          </a>
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;