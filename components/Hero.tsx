'use client';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap, BarChart2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#0A0A0A] pt-20"
    >
      {/* Warm ambient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(201,192,176,0.04)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(201,192,176,0.03)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 py-16">
        {/* Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="font-medium tracking-widest uppercase text-sm mb-4"
            style={{ color: '#5C5854' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#F0EDE8' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Kareem Meenazi</span>
          </motion.h1>
          <motion.p
            className="text-xl font-medium mb-3"
            style={{ color: '#C9C0B0' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Business Analyst
          </motion.p>
          <motion.p
            className="text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            style={{ color: '#9A9490' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            From insights to action — building smarter business solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </motion.div>
        </motion.div>

        {/* Profile card */}
        <motion.div
          className="flex-shrink-0 w-full max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: '#161616',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Profile image */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="/images/km_page-0001.jpg"
                alt="Kareem Meenazi"
                fill
                className="object-cover object-top scale-110"
                style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, #161616 100%)' }}
              />
            </div>

            {/* Card info */}
            <div className="p-5">
              <h3 className="font-bold text-base mb-1" style={{ color: '#F0EDE8' }}>Kareem Meenazi</h3>
              <p className="text-sm mb-4" style={{ color: '#C9C0B0' }}>Business Analyst</p>
              <div className="space-y-2">
                {[
                  { icon: MapPin, text: 'Hyderabad, IN' },
                  { icon: Briefcase, text: 'Open to Opportunities' },
                  { icon: GraduationCap, text: "St. Mary's College, Osmania" },
                  { icon: BarChart2, text: 'Expertise: Power BI & Excel' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={13} style={{ color: '#5C5854', flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: '#9A9490' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
