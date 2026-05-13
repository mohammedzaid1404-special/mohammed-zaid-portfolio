import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, Brain, Database, Globe, Terminal, Cpu, 
  Layers, GitBranch, Cloud, Palette 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'TensorFlow / Keras', level: 70 },
      { name: 'Scikit-learn', level: 72 },
      { name: 'Pandas / NumPy', level: 78 },
      { name: 'NLP Basics', level: 60 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Framer Motion', level: 65 },
    ],
  },
  {
    title: 'Backend & Database',
    icon: Terminal,
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Flask', level: 78 },
      { name: 'REST APIs', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 68 },
    ],
  },
  {
    title: 'ECE & Tools',
    icon: Cpu,
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'C / C++', level: 75 },
      { name: 'Arduino / Embedded', level: 70 },
      { name: 'Git / GitHub', level: 80 },
      { name: 'MATLAB', level: 60 },
      { name: 'Circuit Design', level: 65 },
    ],
  },
];

const SkillBar = ({ name, level, delay, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-300">{name}</span>
        <motion.span
          className="text-xs font-semibold text-slate-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-100 mt-3 mb-6">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Technologies
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A growing toolkit built through self-learning, projects, and academic coursework
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="glass-card p-8 hover:border-primary/20 transition-all duration-500 group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.15 + skillIndex * 0.1}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tools Strip */}
        <motion.div
          className="mt-12 glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6 text-center">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Jupyter', 'VS Code', 'Postman', 'Figma', 'Linux',
              'Vercel', 'OpenCV', 'Matplotlib', 'Firebase',
              'Redux', 'Vite', 'Docker', 'MQTT', 'Tinkercad',
            ].map((tool, i) => (
              <motion.span
                key={tool}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.9 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
