'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="section-padding relative bg-[rgba(8,8,16,0.8)]" aria-label="Contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto">
            Open to new opportunities, collaborations, and business conversations. Reach out via LinkedIn or email.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/kareem-meenazi-10013b265/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Connect on LinkedIn"
          >
            {/* Icon container */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-blue-900/40 transition-shadow">
              <Linkedin size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Connect with me professionally and explore my work history
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
              View Profile <ExternalLink size={14} />
            </span>
          </motion.a>

          {/* Email Card */}
          <motion.a
            href="mailto:Kareemmeenazi1116@icloud.com"
            className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Send an email to Kareem"
          >
            {/* Icon container */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-indigo-900/40 transition-shadow">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Drop me a message directly and I&apos;ll get back to you promptly
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
              Send Message <ArrowRight size={14} />
            </span>
          </motion.a>
        </div>

        {/* Availability banner */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-slate-400">
              Currently <span className="text-emerald-400 font-semibold">available</span> for new opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
