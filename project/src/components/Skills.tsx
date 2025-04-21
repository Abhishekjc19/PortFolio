import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-react';
import { Code, Database, Cpu, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Programming' },
  { name: 'C++', level: 85, category: 'Programming' },
  { name: 'Machine Learning', level: 80, category: 'AI/ML' },
  { name: 'React', level: 85, category: 'Frontend' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'TypeScript', level: 75, category: 'Frontend' },
  { name: 'SQL', level: 85, category: 'Database' },
  { name: 'Git', level: 90, category: 'Tools' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#FFD100]">Skills</span> & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#FFD100]">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#FFD100] rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;