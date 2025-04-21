import * as React from 'react';
import { Github, Linkedin, Phone, Mail, Download } from 'lucide-react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full bg-[#FFD100]/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-[#FFD100]/20 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-[#FFD100]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-[#FFD100] mb-2 tracking-wider">HELLO, I'M</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Abhishek <span className="text-[#FFD100]">J C</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Software Development Engineer 
              <span className="block mt-2">Specializing in Full Stack Development</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <button 
                onClick={() => {
                  // Create a link element
                  const link = document.createElement('a');
                  link.href = 'https://raw.githubusercontent.com/Abhishekjc19/PortFolio/main/project/public/files/resume.pdf';
                  link.download = 'Abhishek_JC_Resume.pdf';
                  link.target = '_blank';
                  
                  // Append to body, click, and remove
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-outline flex items-center"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </button>
            </div>
            
            <div className="flex gap-5 mt-8">
              <a 
                href="https://www.linkedin.com/in/abhishek-j-c-78855829b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD100] transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Abhishekjc19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFD100] transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a 
                href="tel:6362206323" 
                className="text-white hover:text-[#FFD100] transition-colors duration-300"
              >
                <Phone size={24} />
              </a>
              <a 
                href="mailto:abhishekjc679@gmail.com" 
                className="text-white hover:text-[#FFD100] transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="glass-card p-8 border-[#FFD100]/20 yellow-glow transform rotate-3">
              <div className="w-full h-96 bg-gradient-to-br from-[#111] via-[#222] to-[#111] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                  <h2 className="text-2xl font-bold mb-2">Abhishek J C</h2>
                  <p className="text-[#FFD100] mb-4">Full Stack Developer</p>
                  <div className="w-full max-w-xs">
                    <div className="flex justify-between mb-2">
                      <span>Frontend</span>
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1.5 rounded-full mb-3">
                      <div className="bg-[#FFD100] h-1.5 rounded-full" style={{width: '90%'}}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span>Backend</span>
                      <span>⭐⭐⭐⭐</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1.5 rounded-full mb-3">
                      <div className="bg-[#FFD100] h-1.5 rounded-full" style={{width: '80%'}}></div>
                    </div>
                    
                    <div className="flex justify-between mb-2">
                      <span>Database</span>
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="w-full bg-gray-700 h-1.5 rounded-full">
                      <div className="bg-[#FFD100] h-1.5 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;