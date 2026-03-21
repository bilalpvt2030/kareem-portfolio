'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const softSkills = [
  { name: 'English Proficiency', level: 95, desc: 'Excellent written & verbal communication' },
  { name: 'Verbal Communication', level: 90, desc: 'Strong interpersonal & presentation skills' },
  { name: 'Adaptability', level: 88, desc: 'Thrives in dynamic, fast-paced environments' },
  { name: 'Teamwork', level: 92, desc: 'Collaborative approach to problem-solving' },
  { name: 'Critical Thinking', level: 85, desc: 'Structured approach to complex challenges' },
];

const technicalSkills = [
  { name: 'Power BI', icon: '📊', level: 82, color: 'from-yellow-500 to-orange-500', tag: 'Data Visualization' },
  { name: 'Microsoft Excel', icon: '📈', level: 88, color: 'from-green-500 to-emerald-500', tag: 'Data Analysis' },
  { name: 'Data Analysis', icon: '🔍', level: 80, color: 'from-indigo-500 to-blue-500', tag: 'Insights' },
  { name: 'Market Research', icon: '🎯', level: 78, color: 'from-pink-500 to-rose-500', tag: 'Research' },
  { name: 'Business Research', icon: '💼', level: 83, color: 'from-violet-500 to-purple-500', tag: 'Strategy' },
  { name: 'Adobe Illustrator', icon: '🎨', level: 70, color: 'from-orange-500 to-red-500', tag: 'Design' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding relative bg-[rgba(10,10,20,0.6)]" aria-label="Skills">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills &{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Soft Skills */}
          <div>
            <motion.h3
              className="text-base font-semibold text-slate-300 mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span className="w-6 h-px bg-indigo-500" />
              Core Skills
            </motion.h3>
            <div className="space-y-5">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-semibold text-slate-200">{skill.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{skill.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-indigo-400 ml-3">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <motion.h3
              className="text-base font-semibold text-slate-300 mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
            >
              <span className="w-6 h-px bg-indigo-500" />
              Technical & Business Skills
            </motion.h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="glass-card p-4 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  whileHover={{ scale: 1.03, borderColor: 'rgba(99,102,241,0.4)' }}
                >
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">{skill.name}</p>
                  <p className="text-xs text-slate-500 mb-3">{skill.tag}</p>
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.07, ease: 'easeOut' }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1 text-right">{skill.level}%</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
