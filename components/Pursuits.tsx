'use client';

import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

const pursuits = [
  {
    icon: Users,
    title: 'Model United Nations (MUN)',
    description: 'Active participant and delegate in MUN conferences, honing skills in diplomacy, public speaking, research, and negotiation on global issues.',
    tag: 'Leadership & Diplomacy',
  },
  {
    icon: TrendingUp,
    title: 'FMCG Case Study Analysis',
    description: 'Deep-dived into Fast-Moving Consumer Goods sector case studies, analyzing market strategies, consumer behavior, and competitive positioning.',
    tag: 'Business & Strategy',
  },
  {
    icon: Trophy,
    title: 'Sales — Automotive & Kitchen',
    description: 'Hands-on sales experience across automotive and kitchen product segments, developing client relationship skills and understanding consumer decision journeys.',
    tag: 'Sales & Client Relations',
  },
  {
    icon: Target,
    title: 'Real Estate Operations',
    description: 'Exposure to real estate operations, understanding property markets, client acquisition, and documentation processes in a fast-paced environment.',
    tag: 'Operations & Market Insight',
  },
  {
    icon: BookOpen,
    title: 'Business Research & Market Analysis',
    description: 'Conducted structured business research and market analysis projects, translating raw data into actionable insights for decision-making.',
    tag: 'Research & Analytics',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving & Critical Thinking',
    description: 'Consistently applying structured problem-solving frameworks to real-world business challenges, focusing on data-driven and creative approaches.',
    tag: 'Strategy & Innovation',
  },
];

export default function Pursuits() {
  return (
    <section
      id="pursuits"
      className="section-padding"
      style={{ background: '#111111' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
            style={{
              color: '#9A9490',
              background: 'rgba(201,192,176,0.06)',
              border: '1px solid rgba(201,192,176,0.12)',
            }}
          >
            What Drives Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#F0EDE8' }}>
            My{' '}
            <span className="gradient-text">Pursuits</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#9A9490' }}>
            Beyond titles and roles — here are the experiences and endeavors that shape how I think, work, and grow.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pursuits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass-card p-6 group"
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{
                    background: 'rgba(201,192,176,0.08)',
                    border: '1px solid rgba(201,192,176,0.14)',
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#C9C0B0' }} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3"
                  style={{ color: '#9A9490', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {item.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-semibold mb-2 transition-colors duration-200"
                  style={{ color: '#F0EDE8' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: '#9A9490' }}>
                  {item.description}
                </p>

                {/* Hover warm glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(201,192,176,0.04), transparent 70%)' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
