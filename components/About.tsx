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
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="about" className="py-28 bg-[#080810]" aria-label="About">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-white/20" />
              <span className="section-label">About Me</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,3.25rem)] font-black leading-tight tracking-[-0.03em] mb-8"
            >
              A bit about{' '}
              <span className="heading-outline">who I am</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col gap-5 text-[15px] text-[#a0a0b0] leading-[1.8]">
              <p>
                I am an aspiring{' '}
                <strong className="text-white font-semibold">Business Analyst</strong>{' '}
                with a strong foundation in communication, analytical thinking, and problem-solving.
                I am passionate about understanding business challenges and translating them into{' '}
                <strong className="text-white font-medium">actionable insights</strong>.
              </p>
              <p>
                With experience across multiple domains including{' '}
                <strong className="text-white/80 font-medium">sales, real estate operations,</strong> and{' '}
                <strong className="text-white/80 font-medium">case-based analysis</strong>,
                I bring adaptability and a practical approach to every task.
              </p>
              <p>
                I am committed, reliable, and continuously learning to enhance my skills in{' '}
                <strong className="text-white/80 font-medium">business analytics and decision-making</strong>.
              </p>
            </motion.div>

            <motion.blockquote
              variants={fadeUp}
              className="mt-8 pl-4 border-l border-white/10 text-[14px] italic text-[#505060]"
            >
              &ldquo;Blending communication and analytics to drive business growth &mdash; one insight at a time.&rdquo;
            </motion.blockquote>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {stats.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -3, borderColor: 'rgba(255,255,255,0.12)' }}
                className="glass-card rounded-xl p-5 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                    <Icon size={13} className="text-white/50" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#505060]">{label}</span>
                </div>
                <p className="text-[15px] font-semibold text-white leading-snug">{value}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
