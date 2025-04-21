import { useState } from 'react';
import { ExternalLink, Github, Code, TrendingUp } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 0,
      title: "Deribit Order Execution and Management System",
      description: "Developed a REST-based order execution and management system for Deribit exchange, integrating real-time order book data and minimizing trading latency.",
      technologies: ["C++", "REST APIs", "WebSockets", "Order Book Management"],
      link: "https://github.com/Abhishekjc19/GoQuant",
      icon: <TrendingUp className="w-10 h-10 text-[#FFD100]" />
    },
    {
      id: 1,
      title: "Machine Learning Based Market Prediction",
      description: "Placeholder for additional project details. This project can showcase Abhishek's ML expertise in the context of financial markets.",
      technologies: ["Python", "TensorFlow", "Pandas", "Time Series Analysis"],
      link: "#",
      icon: <Code className="w-10 h-10 text-[#FFD100]" />
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      description: "Placeholder for potential project. A dashboard to visualize complex trading and market data with interactive components.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#",
      icon: <Code className="w-10 h-10 text-[#FFD100]" />
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFD100]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFD100]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                activeProject === project.id ? 'border-[#FFD100] transform scale-105' : 'opacity-80 hover:opacity-100'
              }`}
              onClick={() => setActiveProject(project.id)}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span key={index} className="text-xs bg-[#FFD100]/20 text-[#FFD100] px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-xs bg-[#FFD100]/20 text-[#FFD100] px-2 py-1 rounded-full">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project detail section */}
        <div className="glass-card p-8 yellow-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2 gradient-text">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-300 mb-6">
                {projects[activeProject].description}
              </p>
              
              <h4 className="text-lg font-medium mb-3 text-[#FFD100]">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="bg-black/40 border border-[#FFD100]/30 text-[#FFD100] px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={projects[activeProject].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center"
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </a>
                <a 
                  href={projects[activeProject].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center"
                >
                  <ExternalLink className="mr-2" size={18} />
                  Live Demo
                </a>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-xl p-6 border border-white/10">
              <div className="mb-4 flex justify-between items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">project-files</div>
              </div>
              
              <div className="text-sm font-mono p-4 bg-black/50 rounded-lg h-80 overflow-y-auto">
                <div className="text-gray-400">// Example code from the project</div>
                <div className="text-[#FFD100] mt-2">class DeribitOrderExecutor {'{'}</div>
                <div className="ml-4 text-gray-300">private:</div>
                <div className="ml-8 text-blue-400">HTTPClient client;</div>
                <div className="ml-8 text-blue-400">OrderBook orderBook;</div>
                <div className="ml-8 text-blue-400">std::vector&lt;Order&gt; activeOrders;</div>
                <div className="ml-4 text-gray-300">public:</div>
                <div className="ml-8 text-green-400">DeribitOrderExecutor(const std::string& apiKey);</div>
                <div className="ml-8 text-green-400">bool submitOrder(const Order& order);</div>
                <div className="ml-8 text-green-400">bool cancelOrder(const std::string& orderId);</div>
                <div className="ml-8 text-green-400">void updateOrderBook();</div>
                <div className="ml-8 text-green-400">double getBestBid() const;</div>
                <div className="ml-8 text-green-400">double getBestAsk() const;</div>
                <div className="text-[#FFD100] mt-2">{'}'};</div>
                <div className="mt-6 text-gray-400">// Implementation example</div>
                <div className="text-cyan-400 mt-2">bool DeribitOrderExecutor::submitOrder(const Order& order) {'{'}</div>
                <div className="ml-4 text-gray-200">json payload = {'{'}</div>
                <div className="ml-8 text-gray-200">"instrument_name": order.instrument,</div>
                <div className="ml-8 text-gray-200">"price": order.price,</div>
                <div className="ml-8 text-gray-200">"amount": order.amount,</div>
                <div className="ml-8 text-gray-200">"type": order.type,</div>
                <div className="ml-8 text-gray-200">"side": order.side</div>
                <div className="ml-4 text-gray-200">{'}'};</div>
                <div className="ml-4 text-gray-200">HTTPResponse response = client.post("/api/v2/private/buy", payload);</div>
                <div className="ml-4 text-gray-200">if (response.status == 200) {'{'}</div>
                <div className="ml-8 text-gray-200">activeOrders.push_back(order);</div>
                <div className="ml-8 text-gray-200">return true;</div>
                <div className="ml-4 text-gray-200">{'}'}</div>
                <div className="ml-4 text-gray-200">return false;</div>
                <div className="text-cyan-400">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;