import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Sparkles, Instagram, Camera } from 'lucide-react';

const Hero = () => {
  const [photoError, setPhotoError] = useState(false);
  const [profileSrc, setProfileSrc] = useState('/profile.jpg');
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileSrc(reader.result);
        setPhotoError(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open to Opportunities
            </motion.div>

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-lg text-slate-400 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-tight">
                <span className="text-slate-100">Mohammed</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary">
                  Zaid M
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Role */}
            <motion.div
              className="flex items-center gap-3 text-xl sm:text-2xl text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="font-display font-medium">
                <Typewriter
                  words={[
                    'ECE Engineering Student',
                    'AI & ML Enthusiast',
                    'Full Stack Developer',
                    'Problem Solver',
                    'Tech Explorer',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-slate-400 text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              2nd Year ECE student at Prince Shri Venkateshwara Padmavathy Engineering College, Chennai.
              Passionate about building intelligent solutions with AI, Machine Learning & modern web technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-semibold text-base overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3.5 rounded-xl text-slate-300 font-semibold text-base border border-white/10 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-5 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="text-sm text-slate-500 mr-2">Follow me</span>
              {[
                { icon: Github, href: 'https://github.com/mohammedzaid1404-special', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-zaid-m-434960402', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/_itz.zaid_143/', label: 'Instagram' },
                { icon: Mail, href: 'mailto:mohammedzaid1404@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Visual */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-6 rounded-full border border-secondary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-12 rounded-full border border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center Glow */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />

              {/* Center Avatar/Photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative group w-48 h-48 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px] shadow-2xl shadow-primary/30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative w-full h-full rounded-full bg-dark-100 flex items-center justify-center overflow-hidden">
                    {!photoError ? (
                      <img
                        src={profileSrc}
                        alt="Mohammed Zaid M"
                        className="w-full h-full object-cover rounded-full"
                        onError={() => setPhotoError(true)}
                      />
                    ) : (
                      <span className="text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        MZ
                      </span>
                    )}
                    
                    {/* Edit Overlay */}
                    <div 
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                      title="Change Profile Picture"
                    >
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </motion.div>
              </div>

              {/* Orbiting Dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI) / 2) * 180,
                      Math.cos((i * Math.PI) / 2 + Math.PI) * 180,
                      Math.cos((i * Math.PI) / 2) * 180,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 2) * 180,
                      Math.sin((i * Math.PI) / 2 + Math.PI) * 180,
                      Math.sin((i * Math.PI) / 2) * 180,
                    ],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors cursor-hover"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
