'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, BarChart2, TrendingUp, Database } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/08 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.1]">
              Kareem{' '}
              <span className="gradient-text">Meenazi</span>
            </motion.h1>

            {/* Title */}
            <motion.p {...fadeUp(0.3)} className="text-lg sm:text-xl font-semibold text-slate-300 mb-4">
              Business Analyst
            </motion.p>

            {/* Tagline */}
            <motion.p {...fadeUp(0.4)} className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              From insights to action — building smarter business solutions through data, strategy, and clear communication.
            </motion.p>

            {/* Stat pills */}
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: BarChart2, label: 'Power BI' },
                { icon: Database, label: 'Data Analysis' },
                { icon: TrendingUp, label: 'Business Strategy' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                  <Icon size={12} className="text-indigo-400" />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4 mb-10">
              <motion.a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-indigo-900/40"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                View Experience
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-xl border border-white/15 text-slate-300 font-semibold text-sm hover:border-indigo-500/50 hover:text-white transition-all"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.55)} className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kareem-meenazi-10013b265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:Kareemmeenazi1116@icloud.com"
                className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                aria-label="Email Kareem"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image + decorative card */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20 blur-2xl scale-110" />
              {/* Image container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 glow-purple">
                {/* Gradient overlay for images not yet provided */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-900/60 via-slate-800/80 to-purple-900/60 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 text-3xl font-bold text-white shadow-xl">
                    KM
                  </div>
                  <p className="text-slate-300 font-semibold text-lg">Kareem Meenazi</p>
                  <p className="text-indigo-400 text-sm mt-1">Business Analyst</p>
                  <div className="mt-4 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-300">
                    Hyderabad, IN
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                📊 Power BI & Excel Expert
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                🏆 MUN Participant
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            aria-label="Scroll to about section"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="group-hover:text-indigo-400 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
