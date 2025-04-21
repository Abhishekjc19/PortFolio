import { Phone, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="py-20 relative">
      {/* Background blur */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 yellow-glow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                I'm currently available for freelance work, internships, and full-time positions. 
                Feel free to reach out if you're looking for a dedicated AI & ML engineer with 
                expertise in algorithmic trading systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#FFD100]/20 p-2 rounded-full mr-4">
                    <Phone className="text-[#FFD100]" size={20} />
                  </div>
                  <a href="tel:6362206323" className="hover:text-[#FFD100] transition-colors duration-300">
                    +91 6362206323
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FFD100]/20 p-2 rounded-full mr-4">
                    <Mail className="text-[#FFD100]" size={20} />
                  </div>
                  <a href="mailto:abhishekjc679@gmail.com" className="hover:text-[#FFD100] transition-colors duration-300">
                    abhishekjc679@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FFD100]/20 p-2 rounded-full mr-4">
                    <Linkedin className="text-[#FFD100]" size={20} />
                  </div>
                  <a 
                    href="https://www.linkedin.com/in/abhishek-j-c-78855829b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD100] transition-colors duration-300"
                  >
                    linkedin.com/in/abhishek-j-c-78855829b
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-[#FFD100]/20 p-2 rounded-full mr-4">
                    <Github className="text-[#FFD100]" size={20} />
                  </div>
                  <a 
                    href="https://github.com/Abhishekjc19" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-[#FFD100] transition-colors duration-300"
                  >
                    github.com/Abhishekjc19
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-6 text-[#FFD100]">Quick Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-black/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#FFD100] focus:border-[#FFD100] block w-full p-3" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-black/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#FFD100] focus:border-[#FFD100] block w-full p-3" 
                    placeholder="name@example.com" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="bg-black/50 border border-gray-600 text-white text-sm rounded-lg focus:ring-[#FFD100] focus:border-[#FFD100] block w-full p-3" 
                    placeholder="Let's discuss your project..." 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
              © 2025 Abhishek J C. All rights reserved.
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