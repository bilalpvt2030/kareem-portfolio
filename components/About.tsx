'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, GraduationCap, Users } from 'lucide-react';

const stats = [
  { icon: MapPin, label: 'Location', value: 'Hyderabad, IN' },
  { icon: Briefcase, label: 'Focus', value: 'Business Analysis & Data Strategy' },
  { icon: GraduationCap, label: 'Education', value: 'BSc Business & Analytics' },
  { icon: Users, label: 'Status', value: 'Open to Opportunities' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      className="section-padding relative"
      style={{ background: '#111111' }}
      ref={ref}
    >
      {/* Warm ambient */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(201,192,176,0.03)' }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-14"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#5C5854' }}
          >
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#F0EDE8' }}>
            A bit about{' '}
            <span className="gradient-text">who I am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-base leading-relaxed" style={{ color: '#9A9490' }}>
              I am an aspiring <strong style={{ color: '#F0EDE8', fontWeight: 600 }}>Business Analyst</strong> with a strong foundation in communication, analytical thinking, and problem-solving. I am passionate about understanding business challenges and translating them into{' '}
              <strong style={{ color: '#F0EDE8', fontWeight: 600 }}>actionable insights</strong>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#9A9490' }}>
              With experience across multiple domains including{' '}
              <strong style={{ color: '#F0EDE8', fontWeight: 600 }}>sales, real estate operations,</strong> and{' '}
              <strong style={{ color: '#F0EDE8', fontWeight: 600 }}>case-based analysis</strong>, I bring adaptability and a practical approach to every task.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#9A9490' }}>
              I am committed, reliable, and continuously learning to enhance my skills in{' '}
              <strong style={{ color: '#F0EDE8', fontWeight: 600 }}>business analytics and decision-making</strong>.
            </p>

            {/* Quote */}
            <blockquote
              className="mt-6 pl-4 py-1"
              style={{
                borderLeft: '2px solid rgba(201,192,176,0.25)',
                color: '#9A9490',
                fontStyle: 'italic',
                fontSize: '14px',
              }}
            >
              &ldquo;Blending communication and analytics to drive business growth — one insight at a time.&rdquo;
            </blockquote>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card p-5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(201,192,176,0.08)' }}
                >
                  <Icon size={16} style={{ color: '#C9C0B0' }} />
                </div>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: '#5C5854' }}
                >
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: '#F0EDE8' }}>
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
