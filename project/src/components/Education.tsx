import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#FFD100]/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-[#FFD100]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="glass-card p-8 yellow-glow">
            <div className="flex items-center mb-6">
              <div className="bg-[#FFD100]/20 p-3 rounded-full mr-4">
                <GraduationCap className="text-[#FFD100]" size={28} />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Education</h3>
            </div>
            
            <div className="border-l-2 border-[#FFD100]/30 pl-6 ml-6 space-y-10 relative">
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#FFD100] rounded-full transform -translate-x-[9px]"></div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="text-[#FFD100] mr-2" size={16} />
                  <span className="text-gray-400 text-sm">2020 - Present</span>
                </div>
                <h4 className="text-xl font-semibold mb-1">B.E. in Artificial Intelligence & Machine Learning</h4>
                <p className="text-[#FFD100] mb-2">Nitte Meenakshi Institute of Technology</p>
                <p className="text-gray-300 text-sm">
                  Pursuing a specialized degree in AI & ML with a focus on advanced algorithms, neural networks, and data science. Maintaining an 8.1 CGPA while participating in research projects and hackathons.
                </p>
                <div className="mt-3 flex items-center">
                  <span className="bg-[#FFD100]/20 text-[#FFD100] px-3 py-1 rounded-full text-sm">
                    8.1 CGPA
                  </span>
                </div>
              </div>
              
              {/* Additional education can be added here */}
              
              {/* Timeline end dot */}
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FFD100] rounded-full transform -translate-x-[9px]"></div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="glass-card p-8 yellow-glow">
            <div className="flex items-center mb-6">
              <div className="bg-[#FFD100]/20 p-3 rounded-full mr-4">
                <Award className="text-[#FFD100]" size={28} />
              </div>
              <h3 className="text-2xl font-semibold gradient-text">Certifications</h3>
            </div>
            
            <div className="border-l-2 border-[#FFD100]/30 pl-6 ml-6 space-y-10 relative">
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-[#FFD100] rounded-full transform -translate-x-[9px]"></div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="text-[#FFD100] mr-2" size={16} />
                  <span className="text-gray-400 text-sm">2023</span>
                </div>
                <h4 className="text-xl font-semibold mb-1">Remote Sensing and GIS Applications</h4>
                <p className="text-[#FFD100] mb-2">Indian Institute of Remote Sensing (IIRS)</p>
                <p className="text-gray-300 text-sm">
                  Completed a comprehensive course on remote sensing technologies and GIS applications for environmental monitoring and analysis.
                </p>
                <div className="mt-3 flex items-center">
                  <a 
                    href="https://certificate.iirs.gov.in/checkstatus.php?uid=c603e9fbd28808687b01007fbf03e0e8&enm=20241332341873" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#FFD100]/20 text-[#FFD100] px-3 py-1 rounded-full text-sm hover:bg-[#FFD100]/30 transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="text-[#FFD100] mr-2" size={16} />
                  <span className="text-gray-400 text-sm">2022</span>
                </div>
                <h4 className="text-xl font-semibold mb-1">Machine Learning Specialization</h4>
                <p className="text-[#FFD100] mb-2">Stanford University (Coursera)</p>
                <p className="text-gray-300 text-sm">
                  Completed a specialization in machine learning covering supervised learning, unsupervised learning, and deep learning.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="text-[#FFD100] mr-2" size={16} />
                  <span className="text-gray-400 text-sm">2022</span>
                </div>
                <h4 className="text-xl font-semibold mb-1">Full Stack Web Development</h4>
                <p className="text-[#FFD100] mb-2">Udemy</p>
                <p className="text-gray-300 text-sm">
                  Completed a comprehensive course on full stack web development covering frontend and backend technologies.
                </p>
              </div>
              
              {/* Timeline end dot */}
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FFD100] rounded-full transform -translate-x-[9px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;