'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, BarChart2, ShoppingBag, Building2, GraduationCap, BookOpen } from 'lucide-react';

const experiences = [
  {
    id: 1,
    Icon: Users,
    title: 'Model United Nations (MUN)',
    org: 'Multiple Conferences',
    period: 'Academic Years',
    points: [
      'Participated in multiple MUN conferences, enhancing public speaking and negotiation skills',
      'Developed strong research, policy analysis, and structured argumentation abilities',
      'Represented diverse country positions with well-researched policies',
    ],
  },
  {
    id: 2,
    Icon: BarChart2,
    title: 'FMCG Case Studies',
    org: 'Business Analysis Projects',
    period: 'Project-Based',
    points: [
      'Conducted in-depth case study analysis on FMCG businesses',
      'Evaluated market strategies, consumer behavior, and business performance',
      'Provided data-backed insights and recommendations based on findings',
    ],
  },
  {
    id: 3,
    Icon: ShoppingBag,
    title: 'Sales Experience',
    org: 'Automotive & Kitchen Remodeling',
    period: 'Sales Role',
    points: [
      'Engaged with customers to understand requirements and provide suitable solutions',
      'Developed strong persuasion, client-handling, and consultative sales skills',
      'Contributed to sales conversions and customer satisfaction improvements',
    ],
  },
  {
    id: 4,
    Icon: Building2,
    title: 'Real Estate Operations',
    org: 'Property Management',
    period: 'Operational Role',
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
  },
  {
    id: 'edu2',
    Icon: BookOpen,
    degree: 'Schooling',
    institution: 'Glendale Academy',
    sub: 'Foundation Years',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const eduRef = useRef(null);
  const eduInView = useInView(eduRef, { once: true, margin: '-60px' });

  return (
    <section
      id="experience"
      className="section-padding relative"
      style={{ background: '#161616' }}
      aria-label="Experience and Education"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#5C5854' }}>Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#F0EDE8' }}>
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <div ref={ref} className="relative mb-20">
          <div
            className="hidden md:block absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(201,192,176,0.2), rgba(201,192,176,0.05), transparent)' }}
          />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="flex gap-6"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Icon dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg z-10"
                    style={{ background: 'rgba(201,192,176,0.08)', border: '1px solid rgba(201,192,176,0.15)' }}
                  >
                    <exp.Icon className="w-5 h-5" style={{ color: '#C9C0B0' }} />
                  </div>
                </div>
                {/* Card */}
                <div className="flex-1 glass-card p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-base font-bold" style={{ color: '#F0EDE8' }}>{exp.title}</h3>
                      <p className="text-sm mt-0.5" style={{ color: '#C9C0B0' }}>{exp.org}</p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#9A9490' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-sm" style={{ color: '#9A9490' }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                          style={{ background: 'rgba(201,192,176,0.4)' }}
                        />
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
            className="text-xl font-bold mb-8"
            style={{ color: '#F0EDE8' }}
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
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{ background: 'rgba(201,192,176,0.08)', border: '1px solid rgba(201,192,176,0.15)' }}
                >
                  <edu.Icon className="w-5 h-5" style={{ color: '#C9C0B0' }} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#5C5854' }}>{edu.degree}</p>
                <h4 className="text-base font-bold mb-1" style={{ color: '#F0EDE8' }}>{edu.institution}</h4>
                <p className="text-sm" style={{ color: '#9A9490' }}>{edu.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
