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
  'POWER BI', 'EXCEL', 'SQL', 'PYTHON', 'TABLEAU',
  'JIRA', 'CONFLUENCE', 'FIGMA', 'SHAREPOINT',
  'MS TEAMS', 'GOOGLE ANALYTICS', 'NOTION',
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="skills"
      className="section-padding relative"
      style={{ background: '#0A0A0A' }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5C5854' }}>
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#F0EDE8' }}>
            Skills &{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#5C5854' }}>
              — Core Skills
            </p>
            <div className="space-y-6">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <span className="text-sm font-semibold" style={{ color: '#F0EDE8' }}>{skill.name}</span>
                      <span className="text-xs ml-2" style={{ color: '#5C5854' }}>{skill.desc}</span>
                    </div>
                    <span className="text-xs font-mono" style={{ color: '#9A9490' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#5C5854' }}>
              — Technical & Business Skills
            </p>
            <div className="space-y-5">
              {techSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="flex justify-between items-center mb-1">
                    <div>
                      <span className="text-sm font-semibold" style={{ color: '#F0EDE8' }}>{skill.name}</span>
                      <span className="text-xs ml-2" style={{ color: '#5C5854' }}>{skill.cat}</span>
                    </div>
                    <span className="text-xs font-mono" style={{ color: '#9A9490' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 0.8, delay: i * 0.08 + 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#5C5854' }}>
            — Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-semibold tracking-widest px-3 py-1.5 rounded-full"
                style={{
                  color: '#9A9490',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
