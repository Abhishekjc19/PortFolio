import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-32 h-32 bg-[#FFD100]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#FFD100]/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-card p-8 yellow-glow">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h3>
              <p className="text-gray-300 mb-4">
                I'm an engineering student specializing in Artificial Intelligence and Machine Learning at Nitte Meenakshi Institute of Technology, maintaining an impressive 8.1 CGPA. My educational journey has equipped me with a solid foundation in machine learning algorithms, data structures, and software development.
              </p>
              <p className="text-gray-300 mb-6">
                My past experience as a Machine Learning Engineer Intern has allowed me to apply theoretical knowledge to practical solutions, particularly in the field of algorithmic trading and quantitative analysis.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-[#FFD100]">What I Do</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFD100] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Develop machine learning models for financial applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFD100] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Design and implement high-performance trading systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFD100] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Create efficient algorithms for data analysis and pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-[#FFD100] mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>Build robust software solutions using C++, Python, and Java</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card p-8 yellow-glow relative overflow-hidden">
              {/* Abstract pattern background */}
              <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-[#FFD100]/10 blur-xl"></div>
              <div className="absolute -left-20 -top-20 w-60 h-60 rounded-full bg-[#FFD100]/5 blur-xl"></div>
              
              <h3 className="text-2xl font-semibold mb-6 gradient-text">My Stats</h3>
              
              <div className="space-y-6 relative z-10">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Experience</span>
                    <span className="text-[#FFD100]">Machine Learning Intern</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-[#FFD100] to-yellow-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Education</span>
                    <span className="text-[#FFD100]">B.E. in AI & ML</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-[#FFD100] to-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">CGPA</span>
                    <span className="text-[#FFD100]">8.1/10</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-[#FFD100] to-yellow-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Projects</span>
                    <span className="text-[#FFD100]">Trading Systems & ML Models</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div className="bg-gradient-to-r from-[#FFD100] to-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <a href="#contact" className="btn-primary">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;