'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const softSkills = [
  { name: 'English Proficiency', level: 95, desc: 'Excellent written & verbal communication' },
  { name: 'Verbal Communication', level: 90, desc: 'Strong interpersonal & presentation skills' },
  { name: 'Adaptability', level: 88, desc: 'Thrives in dynamic, fast-paced environments' },
  { name: 'Teamwork', level: 92, desc: 'Collaborative approach to problem-solving' },
  { name: 'Critical Thinking', level: 85, desc: 'Structured approach to complex challenges' },
];

const techSkills = [
  { name: 'Power BI', cat: 'Data Visualization', level: 88 },
  { name: 'Microsoft Excel', cat: 'Data Analysis', level: 92 },
  { name: 'SQL', cat: 'Database Management', level: 80 },
  { name: 'Python', cat: 'Data Scripting', level: 72 },
  { name: 'Business Analysis', cat: 'Core Competency', level: 90 },
  { name: 'Data Storytelling', cat: 'Communication', level: 87 },
];

const tools = [
  'Power BI', 'Excel', 'SQL', 'Python', 'Tableau',
  'Jira', 'Confluence', 'Figma', 'SharePoint', 'MS Teams',
  'Google Analytics', 'Notion',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="skills" className="py-28 bg-[#050508]" aria-label="Skills">
      <div className="section-container">

        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-white/20" />
            <span className="section-label">Expertise</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-none tracking-[-0.03em]">
            Skills &{' '}
            <span className="heading-outline">Capabilities</span>
          </motion.h2>
        </motion.div>

        {/* Soft skills — bar chart style */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-20"
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.25em] text-[#505060] mb-8">
            — Core Skills
          </motion.p>
          <div className="flex flex-col gap-6">
            {softSkills.map((s) => (
              <motion.div key={s.name} variants={fadeUp}>
                <div className="flex items-baseline justify-between mb-2">
                  <div>
                    <span className="text-[15px] font-semibold text-white">{s.name}</span>
                    <span className="ml-3 text-[12px] text-[#505060]">{s.desc}</span>
                  </div>
                  <span className="text-[13px] font-bold text-white/70">{s.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech skills grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.25em] text-[#505060] mb-8">
            — Technical & Business Skills
          </motion.p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {techSkills.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.14)' }}
                className="glass-card rounded-xl p-4 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[14px] font-bold text-white">{s.name}</p>
                    <p className="text-[11px] text-[#505060] mt-0.5">{s.cat}</p>
                  </div>
                  <span className="text-[11px] font-bold text-white/40">{s.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                    transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools row */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.p variants={fadeUp} className="text-[11px] uppercase tracking-[0.25em] text-[#505060] mb-6">
            — Tools & Platforms
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <motion.span
                key={t}
                whileHover={{ borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}
                className="tag cursor-default transition-colors"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
