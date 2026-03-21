'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const highlights = [
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India' },
  { icon: GraduationCap, label: 'Education', value: "St. Mary's College, Osmania University" },
  { icon: Briefcase, label: 'Focus', value: 'Business Analysis & Data Strategy' },
  { icon: User, label: 'Status', value: 'Open to Opportunities' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative" aria-label="About Kareem">
      {/* Section bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            A bit about{' '}
            <span className="gradient-text">who I am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left: Bio text */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              I am an aspiring <span className="text-white font-semibold">Business Analyst</span> with a strong foundation in communication, analytical thinking, and problem-solving. I am passionate about understanding business challenges and translating them into <span className="text-indigo-400 font-medium">actionable insights</span>.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              With experience across multiple domains including <span className="text-slate-300">sales, real estate operations,</span> and <span className="text-slate-300">case-based analysis</span>, I bring adaptability and a practical approach to every task.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I am committed, reliable, and continuously learning to enhance my skills in <span className="text-slate-300">business analytics and decision-making</span>.
            </p>

            {/* Quote block */}
            <div className="mt-6 pl-4 border-l-2 border-indigo-500/50">
              <p className="text-slate-300 italic text-sm leading-relaxed">
                &ldquo;Blending communication and analytics to drive business growth &mdash; one insight at a time.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right: Highlights cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card p-4 flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              >
                <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex-shrink-0">
                  <item.icon size={14} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-slate-200">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
