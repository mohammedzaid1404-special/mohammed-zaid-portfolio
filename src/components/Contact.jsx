import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mohammedzaid1404@gmail.com',
    href: 'mailto:mohammedzaid1404@gmail.com',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: '#',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80560 55101',
    href: 'tel:+918056055101',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/mohammedzaid1404-special', label: 'GitHub', color: 'hover:text-white' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mohammed-zaid-m-434960402', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, href: 'https://www.instagram.com/_itz.zaid_143/', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Mail, href: 'mailto:mohammedzaid1404@gmail.com', label: 'Email', color: 'hover:text-primary' },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-slate-100 mt-3 mb-6">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Connect
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project idea, collaboration opportunity, or just want to say hi? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 glass-card p-5 hover:border-primary/20 transition-all duration-500 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white shadow-lg`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{info.label}</p>
                      <p className="text-slate-200 font-medium group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 ${color} hover:border-primary/30 hover:bg-primary/5 transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Note */}
            <motion.div
              className="glass-card p-6 border-l-4 border-primary/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "I'm always excited to discuss new projects, share ideas, or explore 
                internship and collaboration opportunities. Let's build something amazing together!"
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 placeholder-slate-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your idea..."
                />
              </div>

              {/* Status Message */}
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium ${
                    status === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  {status === 'success'
                    ? 'Message sent successfully! I\'ll get back to you soon.'
                    : 'Something went wrong. Please try again.'}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                whileHover={{ scale: isSending ? 1 : 1.02 }}
                whileTap={{ scale: isSending ? 1 : 0.98 }}
              >
                {isSending ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
