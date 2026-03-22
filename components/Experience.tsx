'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BarChart2, ShoppingBag, Building2, GraduationCap, BookOpen } from 'lucide-react';

const experiences = [
  {
    id: 1,
    type: 'experience',
    Icon: Users,
    title: 'Model United Nations (MUN)',
    org: 'Multiple Conferences',
    period: 'Academic Years',
    color: 'from-indigo-500 to-blue-500',
    points: [
      'Participated in multiple MUN conferences, enhancing public speaking and negotiation skills',
      'Developed strong research, policy analysis, and structured argumentation abilities',
      'Represented diverse country positions with well-researched policies',
    ],
  },
  {
    id: 2,
    type: 'experience',
    Icon: BarChart2,
    title: 'FMCG Case Studies',
    org: 'Business Analysis Projects',
    period: 'Project-Based',
    color: 'from-purple-500 to-violet-500',
    points: [
      'Conducted in-depth case study analysis on FMCG businesses',
      'Evaluated market strategies, consumer behavior, and business performance',
      'Provided data-backed insights and recommendations based on findings',
    ],
  },
  {
    id: 3,
    type: 'experience',
    Icon: ShoppingBag,
    title: 'Sales Experience',
    org: 'Automotive & Kitchen Remodeling',
    period: 'Sales Role',
    color: 'from-emerald-500 to-teal-500',
    points: [
      'Engaged with customers to understand requirements and provide suitable solutions',
      'Developed strong persuasion, client-handling, and consultative sales skills',
      'Contributed to sales conversions and customer satisfaction improvements',
    ],
  },
  {
    id: 4,
    type: 'experience',
    Icon: Building2,
    title: 'Real Estate Operations',
    org: 'Property Management',
    period: 'Operational Role',
    color: 'from-rose-500 to-pink-500',
    points: [
      'Gained exposure to property management and operational workflows',
      'Assisted in coordination, client interaction, and transaction processes',
      'Developed understanding of real estate business dynamics and deal flow',
    ],
  },
];

const education = [
  {
    id: 'edu1',
    Icon: GraduationCap,
    degree: "Bachelor's Degree",
    institution: "St. Mary's College",
    sub: 'Affiliated with Osmania University',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'edu2',
    Icon: BookOpen,
    degree: 'Schooling',
    institution: 'Glendale Academy',
    sub: 'Foundation Years',
    color: 'from-teal-500 to-emerald-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: '-60px' });
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience and Education">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>
        {/* Experience Timeline */}
        <div ref={ref} className="relative mb-20">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}>
                    <exp.Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Card */}
                <div className="flex-1 glass-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-bold text-white">{exp.title}</h3>
                      <p className="text-sm text-indigo-400 mt-0.5">{exp.org}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 flex-shrink-0 mt-1.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div ref={eduRef}>
          <motion.h3
            className="text-xl font-bold text-white mb-8"
            initial={{ opacity: 0 }}
            animate={eduInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className="glass-card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={eduInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <edu.Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1">{edu.degree}</p>
                <h4 className="text-base font-bold text-white mb-1">{edu.institution}</h4>
                <p className="text-sm text-slate-500">{edu.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
