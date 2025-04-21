import { useState } from 'react';
import { Code, Database, Cpu, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const skills = {
    programming: [
      { name: "Python", level: 95 },
      { name: "C++", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
    aiml: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Machine Learning", level: 95 },
      { name: "Data Analysis", level: 85 },
      { name: "Computer Vision", level: 80 },
    ],
    dataStructures: [
      { name: "Arrays & Strings", level: 95 },
      { name: "Linked Lists", level: 90 },
      { name: "Trees & Graphs", level: 85 },
      { name: "Dynamic Programming", level: 80 },
      { name: "Algorithms", level: 90 },
    ]
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-40 h-40 bg-[#FFD100]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#FFD100]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16">Skills</h2>
        
        <div className="glass-card p-8 yellow-glow mb-16">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button 
              className={`px-6 py-3 rounded-full flex items-center ${
                activeTab === 'programming' 
                  ? 'bg-[#FFD100] text-black font-bold' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              } transition-all duration-300`}
              onClick={() => setActiveTab('programming')}
            >
              <Code className="mr-2" size={18} />
              Programming Languages
            </button>
            <button 
              className={`px-6 py-3 rounded-full flex items-center ${
                activeTab === 'aiml' 
                  ? 'bg-[#FFD100] text-black font-bold' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              } transition-all duration-300`}
              onClick={() => setActiveTab('aiml')}
            >
              <Cpu className="mr-2" size={18} />
              AI/ML Technologies
            </button>
            <button 
              className={`px-6 py-3 rounded-full flex items-center ${
                activeTab === 'dataStructures' 
                  ? 'bg-[#FFD100] text-black font-bold' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              } transition-all duration-300`}
              onClick={() => setActiveTab('dataStructures')}
            >
              <Database className="mr-2" size={18} />
              Data Structures & Algorithms
            </button>
          </div>
          
          {/* Skills content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              {skills[activeTab as keyof typeof skills].map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[#FFD100]">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-black/50 h-3 rounded-full">
                    <div 
                      className="bg-gradient-to-r from-[#FFD100] to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-[#FFD100]">Key Competencies</h3>
              
              <ul className="space-y-3">
                {activeTab === 'programming' && (
                  <>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Proficient in multiple programming paradigms</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Extensive experience with Python for data analysis</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>C++ expertise for high-performance systems</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Java development for enterprise applications</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>JavaScript for web development and visualization</span>
                    </li>
                  </>
                )}
                
                {activeTab === 'aiml' && (
                  <>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Machine learning model development and training</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Neural network architecture design</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Time series forecasting for market prediction</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Data preprocessing and feature engineering</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Computer vision and image processing</span>
                    </li>
                  </>
                )}
                
                {activeTab === 'dataStructures' && (
                  <>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Advanced algorithm design and analysis</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Optimizing for time and space complexity</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Graph algorithms for network analysis</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Dynamic programming for optimization problems</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-[#FFD100] mr-2" size={18} />
                      <span>Data structure design for specific use cases</span>
                    </li>
                  </>
                )}
              </ul>
              
              <div className="mt-6 p-4 bg-black/20 rounded-lg border border-[#FFD100]/20">
                <h4 className="text-[#FFD100] font-medium mb-2">Why it matters:</h4>
                <p className="text-sm text-gray-300">
                  These technical skills enable me to develop efficient, scalable solutions for complex problems in trading systems and AI applications. My focus on performance optimization is particularly valuable for high-frequency trading environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;