import { Phone, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-20 relative">
      {/* Background blur */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 yellow-glow mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work, internships, and full-time positions. 
              Feel free to reach out if you're looking for a dedicated AI & ML engineer with 
              expertise in algorithmic trading systems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:6362206323" className="flex items-center hover:text-[#FFD100] transition-colors duration-300">
                <div className="bg-[#FFD100]/20 p-2 rounded-full mr-2">
                  <Phone className="text-[#FFD100]" size={20} />
                </div>
                <span>+91 6362206323</span>
              </a>
              
              <a href="mailto:abhishekjc679@gmail.com" className="flex items-center hover:text-[#FFD100] transition-colors duration-300">
                <div className="bg-[#FFD100]/20 p-2 rounded-full mr-2">
                  <Mail className="text-[#FFD100]" size={20} />
                </div>
                <span>abhishekjc679@gmail.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/abhishek-j-c-78855829b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#FFD100] transition-colors duration-300"
              >
                <div className="bg-[#FFD100]/20 p-2 rounded-full mr-2">
                  <Linkedin className="text-[#FFD100]" size={20} />
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Abhishekjc19" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-[#FFD100] transition-colors duration-300"
              >
                <div className="bg-[#FFD100]/20 p-2 rounded-full mr-2">
                  <Github className="text-[#FFD100]" size={20} />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              © 2024 Abhishek J C. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/abhishek-j-c-78855829b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD100] transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Abhishekjc19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#FFD100] transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <button 
              onClick={scrollToTop}
              className="text-gray-400 hover:text-[#FFD100] transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;