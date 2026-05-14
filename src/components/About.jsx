import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Code2, Brain, Zap, Target, Coffee, Rocket, GraduationCap, Camera } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '10+', icon: Rocket },
  { label: 'Technologies', value: '15+', icon: Code2 },
  { label: 'AI Models Explored', value: '5+', icon: Brain },
  { label: 'Cups of Coffee', value: '∞', icon: Coffee },
];

const ProfilePhoto = () => {
  const [error, setError] = useState(false);
  const [profileSrc, setProfileSrc] = useState('/profile.jpg');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileSrc(reader.result);
        setError(false);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div className="relative w-full h-full group">
      {!error ? (
        <img
          src={profileSrc}
          alt="Mohammed Zaid M"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-dark-200 to-dark-300 flex items-center justify-center">
          <span className="text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            MZ
          </span>
        </div>
      )}

      {/* Edit Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer z-20"
        onClick={() => fileInputRef.current?.click()}
        title="Change Profile Picture"
      >
        <Camera className="w-8 h-8 text-white" />
      </div>
      
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span className="text-primary text-sm font-semibold tracking-wider uppercase">
              About Me
            </motion.span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-100 mt-3 mb-6">
              Know More{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </motion.div>

          {/* Profile Photo Card */}
          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <div className="relative">
              {/* Decorative blurs */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative glass-card p-3 rounded-3xl">
                <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden">
                  <ProfilePhoto />
                  
                  {/* Overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-100/90 to-transparent" />
                  
                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-heading font-bold text-lg">Mohammed Zaid M</p>
                    <p className="text-primary text-sm font-medium">ECE Student & Developer</p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -right-4 -bottom-4 glass-card px-4 py-2.5 rounded-xl flex items-center gap-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium text-slate-300">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-card p-6 hover:border-primary/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-100 mb-2">Who I Am</h3>
                    <p className="text-slate-400 leading-relaxed">
                      I'm Mohammed Zaid M, a 2nd year Electronics & Communication Engineering 
                      student at Prince Shri Venkateshwara Padmavathy Engineering College, Chennai. 
                      I'm deeply passionate about AI, machine learning, and building modern web applications 
                      that solve real-world problems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-secondary/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-100 mb-2">What I Do</h3>
                    <p className="text-slate-400 leading-relaxed">
                      I build full-stack web applications, explore AI/ML model development, 
                      and work on projects combining my ECE fundamentals with software engineering. 
                      From intelligent platforms to interactive web apps, I love turning concepts into working solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 hover:border-primary/20 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-slate-100 mb-2">Education</h3>
                    <p className="text-slate-400 leading-relaxed">
                      <span className="text-slate-300 font-medium">B.E. in ECE (2025 - 2029)</span> — PSVPEC, Ponmar, Chennai
                      <br />
                      <span className="text-slate-300 font-medium">12th (2024 - 2025) — 87%</span> | <span className="text-slate-300 font-medium">11th (2023 - 2024) — 85%</span> — Ranipet District Govt. Model School
                      <br />
                      <span className="text-slate-300 font-medium">10th (2022 - 2023)</span> — Govt. Higher Secondary School, Rasthupuram, Ranipet
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats + Visual */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="glass-card p-6 text-center hover:border-primary/20 transition-all duration-500 group"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary mb-3 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                        <Icon size={22} />
                      </div>
                      <div className="text-3xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech Stack Mini Preview */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                  Core Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'Node.js', 'TensorFlow', 'Flask', 'MongoDB', 'JavaScript', 'C/C++'].map(
                    (tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:border-primary/30 hover:text-primary transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
