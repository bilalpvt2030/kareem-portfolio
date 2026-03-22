'use client';

import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Target, Lightbulb, TrendingUp } from 'lucide-react';

const pursuits = [
  {
    icon: Users,
    title: 'Model United Nations (MUN)',
    description:
      'Active participant and delegate in MUN conferences, honing skills in diplomacy, public speaking, research, and negotiation on global issues.',
    tag: 'Leadership & Diplomacy',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: TrendingUp,
    title: 'FMCG Case Study Analysis',
    description:
      'Deep-dived into Fast-Moving Consumer Goods sector case studies, analyzing market strategies, consumer behavior, and competitive positioning.',
    tag: 'Business & Strategy',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Trophy,
    title: 'Sales — Automotive & Kitchen',
    description:
      'Hands-on sales experience across automotive and kitchen product segments, developing client relationship skills and understanding consumer decision journeys.',
    tag: 'Sales & Client Relations',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Target,
    title: 'Real Estate Operations',
    description:
      'Exposure to real estate operations, understanding property markets, client acquisition, and documentation processes in a fast-paced environment.',
    tag: 'Operations & Market Insight',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: BookOpen,
    title: 'Business Research & Market Analysis',
    description:
      'Conducted structured business research and market analysis projects, translating raw data into actionable insights for decision-making.',
    tag: 'Research & Analytics',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Lightbulb,
    title: 'Problem-Solving & Critical Thinking',
    description:
      'Consistently applying structured problem-solving frameworks to real-world business challenges, focusing on data-driven and creative approaches.',
    tag: 'Strategy & Innovation',
    color: 'from-yellow-500 to-amber-600',
  },
];

export default function Pursuits() {
  return (
    <section
      id="pursuits"
      className="py-24 bg-gradient-to-b from-slate-900 to-slate-950"
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
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
            What Drives Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pursuits
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beyond titles and roles — here are the experiences and endeavors that
            shape how I think, work, and grow.
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
                className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300 hover:bg-slate-800/80"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Tag */}
                <span className="inline-block text-xs font-medium text-slate-400 bg-slate-700/50 px-2.5 py-1 rounded-full mb-3">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle gradient hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
