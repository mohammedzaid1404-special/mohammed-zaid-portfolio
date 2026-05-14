import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ChevronRight, Sparkles, Plus } from 'lucide-react';

const projects = [
  {
    title: 'WorkSync AI',
    subtitle: 'AI-Powered Resource Allocation',
    description:
      'An intelligent platform for automated employee onboarding, skill assessment, and smart project-resource matching using AI algorithms. Features real-time dashboards and admin approval workflows.',
    tags: ['React', 'Flask', 'MongoDB', 'AI/ML', 'TailwindCSS'],
    category: 'Full Stack',
    gradient: 'from-cyan-500 to-blue-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: true,
  },
  {
    title: 'Unbiased AI',
    subtitle: 'Bias Detection & Mitigation',
    description:
      'A comprehensive platform to detect, measure, and mitigate bias in AI datasets and models using fairness libraries like AIF360 and Fairlearn, with a premium analytics dashboard.',
    tags: ['Python', 'React', 'AIF360', 'Fairlearn', 'Flask'],
    category: 'AI/ML',
    gradient: 'from-violet-500 to-purple-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: true,
  },
  {
    title: 'Smart Volunteer Hub',
    subtitle: 'Volunteer Coordination System',
    description:
      'A data-driven volunteer coordination system featuring skill-based matching, real-time dashboards, and automated scheduling for community organizations.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'Full Stack',
    gradient: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: false,
  },
  {
    title: 'IoT Smart Monitor',
    subtitle: 'Embedded Systems + Web Dashboard',
    description:
      'An IoT-based monitoring system combining ECE hardware fundamentals with a web dashboard for real-time sensor data visualization and alerting.',
    tags: ['Arduino', 'Python', 'React', 'MQTT', 'Flask'],
    category: 'IoT / ECE',
    gradient: 'from-amber-500 to-orange-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: false,
  },
  {
    title: 'AI Image Classifier',
    subtitle: 'Deep Learning Vision Model',
    description:
      'A convolutional neural network model trained to classify images across multiple categories with high accuracy. Includes a web-based demo interface for testing.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Flask'],
    category: 'AI/ML',
    gradient: 'from-pink-500 to-rose-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Website',
    subtitle: 'Modern Personal Portfolio',
    description:
      'This very portfolio — a premium, animated, dark-themed personal website built with React, Tailwind CSS, and Framer Motion to showcase my work and skills.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    category: 'Full Stack',
    gradient: 'from-indigo-500 to-blue-600',
    github: 'https://github.com/mohammedzaid1404-special',
    live: '#',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'AI/ML', 'IoT / ECE'];

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`glass-card overflow-hidden group ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header Gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles size={12} />
            Featured
          </motion.div>
        )}

        {/* Category */}
        <span className="relative inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
          {project.category}
        </span>

        {/* Project Title */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-heading font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-white/80 text-sm font-medium">{project.subtitle}</p>
        </div>

        {/* Hover overlay with links */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.1 }}
                aria-label="View on GitHub"
              >
                <Github size={22} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15 }}
                whileHover={{ scale: 1.1 }}
                aria-label="View live demo"
              >
                <Eye size={22} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan-400 transition-colors pt-2 group/link"
        >
          View on GitHub
          <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-100 mt-3 mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Projects showcasing my skills in AI, web development, and embedded systems
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Controls Container */}
        <div className="relative mb-12 flex flex-col items-center">
          {/* Category Filter */}
          <motion.div
            className="flex justify-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Add Project Button */}
          <motion.div
            className="mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-white hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 shadow-lg shadow-primary/10"
              onClick={() => console.log('Add Project')}
            >
              <Plus size={18} className="text-primary group-hover:rotate-90 transition-transform duration-300" />
              <span>Add Projects</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
