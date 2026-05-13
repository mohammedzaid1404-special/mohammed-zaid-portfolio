import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/mohammedzaid1404-special', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-zaid-m-434960402', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_itz.zaid_143/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:mohammedzaid1404@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-200/50 backdrop-blur-sm">
      {/* Scroll to Top Button */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2">
        <motion.button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
              <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                MZ
              </span>
              <span className="text-slate-300 ml-2 text-lg font-light">Portfolio</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              2nd Year ECE student at PSVPEC, Chennai. Passionate about AI, Machine Learning & 
              Full Stack Web Development. Always eager to learn and build impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm text-slate-400 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Follow Me
            </h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-500 text-xs">
              Open to internships & collaborations
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              © {currentYear} Mohammed Zaid M. Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-500 fill-red-500" />
              </motion.span>
              & lots of ☕
            </p>
            <p className="text-slate-600 text-xs">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
