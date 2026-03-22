'use client';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, BarChart2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Kareem Meenazi
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-slate-300 mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Business Analyst
          </motion.p>
          <motion.p
            className="text-slate-400 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            From insights to action &mdash; building smarter business solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="px-8 py-3 border border-slate-600 text-slate-300 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-72 sm:w-80 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
            {/* Profile image - no gap, full bleed */}
            <div className="relative h-72 w-full">
              <Image
                src="/images/km_page-0001.jpg"
                alt="Kareem Meenazi"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Card info */}
            <div className="p-5 bg-slate-800/60">
              <h3 className="text-white font-bold text-xl mb-1">Kareem Meenazi</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">Business Analyst</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Hyderabad, IN</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Briefcase size={14} className="text-purple-400 flex-shrink-0" />
                  <span>Open to Opportunities</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <GraduationCap size={14} className="text-blue-400 flex-shrink-0" />
                  <span>St. Mary&apos;s College, Osmania</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <BarChart2 size={14} className="text-purple-400 flex-shrink-0" />
                  <span>Expertise: Power BI &amp; Excel</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
