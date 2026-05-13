import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Star, Medal, GraduationCap, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'B.E. ECE — PSVPEC',
    description: 'Pursuing B.E. Electronics & Communication Engineering at Prince Shri Venkateshwara Padmavathy Engineering College, Chennai. Expected to graduate in 2029.',
    year: '2025-2029',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: GraduationCap,
    title: '12th Standard — 87%',
    description: 'Completed 12th standard with 87% at Ranipet District Government Model School, Ranipet. Strong academic performance in STEM subjects.',
    year: '2024-2025',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    title: '11th Standard — 85%',
    description: 'Scored 85% in 11th standard at Ranipet District Government Model School, Ranipet. Built a solid foundation in science and mathematics.',
    year: '2023-2024',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: GraduationCap,
    title: '10th Standard',
    description: 'Completed 10th standard at Government Higher Secondary School, Rasthupuram, Ranipet.',
    year: '2022-2023',
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    icon: Star,
    title: 'Self-Taught Developer',
    description: 'Independently learning Python, React, Machine Learning, and full-stack development while pursuing ECE.',
    year: '2024-Present',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: BookOpen,
    title: 'Active GitHub Contributor',
    description: 'Maintaining an active GitHub profile with multiple repositories spanning AI/ML experiments, web applications, and engineering projects.',
    year: '2025',
    gradient: 'from-indigo-500 to-blue-600',
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-100 mt-3 mb-6">
            Achievements &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Milestones
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Key milestones in my academic and development journey
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.title}
                className={`relative flex items-center mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                    isLeft ? 'md:pr-8' : 'md:pl-8'
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <div className="glass-card p-6 hover:border-primary/20 transition-all duration-500 group">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${achievement.gradient} text-white`}>
                        {achievement.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-slate-100 mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
