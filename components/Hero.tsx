'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Linkedin, Mail, MapPin } from 'lucide-react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden ambient-bg" aria-label="Hero">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(80,60,180,0.05)] blur-[140px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[rgba(40,20,100,0.06)] blur-[100px]" />
      </div>
      <div className="absolute top-[70px] inset-x-0 h-px bg-white/[0.04]" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-[110px] pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-16 lg:gap-20 items-center">

          {/* === LEFT: TEXT === */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1 flex flex-col"
          >
            {/* Label row */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-white/20" />
              <span className="section-label tracking-[0.3em]">Business Analyst</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-white mb-2"
            >
              Kareem
            </motion.h1>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(3rem,8vw,6.5rem)] font-black leading-[0.92] tracking-[-0.03em] mb-8"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}
            >
              Meenazi
            </motion.h1>

            {/* Divider */}
            <motion.div variants={fadeUp} className="w-full h-px bg-white/[0.07] mb-7" />

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] text-[#808090] leading-[1.75] max-w-[480px] mb-10"
            >
              From insights to action — building smarter business solutions through data, strategy, and clear communication.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
              <motion.button
                onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                View Work
                <ArrowDown size={13} />
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/kareem-meenazi-10013b265/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[12px] text-[#505060] hover:text-white transition-colors tracking-wide"
                aria-label="LinkedIn"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
              <span className="w-px h-3 bg-white/10" />
              <a
                href="mailto:Kareemmeenazi1116@icloud.com"
                className="flex items-center gap-2 text-[12px] text-[#505060] hover:text-white transition-colors tracking-wide"
                aria-label="Email"
              >
                <Mail size={13} />
                Email
              </a>
              <span className="w-px h-3 bg-white/10" />
              <span className="tag">Available</span>
            </motion.div>
          </motion.div>

          {/* === RIGHT: PHOTO === */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[460px]">
              {/* Outer glow ring */}
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-white/[0.12] via-[rgba(120,100,200,0.15)] to-transparent" />

              {/* Photo container - tall portrait ratio */}
              <motion.div
                className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden"
                style={{ y: imgY, scale: imgScale }}
              >
                {/* Real photo */}
                <Image
                  src="/images/kareem.jpg"
                  alt="Kareem Meenazi - Business Analyst based in Hyderabad"
                  fill
                  priority
                  className="object-cover object-top grayscale brightness-95 contrast-110"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = 'none';
                  }}
                />

                {/* Fallback (shown only if image missing) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] flex flex-col items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/15 flex items-center justify-center mb-5">
                    <span className="text-4xl font-black text-white/80 tracking-tight">KM</span>
                  </div>
                  <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Kareem Meenazi</p>
                  <p className="text-white/30 text-xs mt-1 tracking-widest">Upload photo to activate</p>
                </div>

                {/* Overlay gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/20 via-transparent to-transparent" />

                {/* Bottom info strip — name + location + availability */}
                <div className="absolute bottom-0 inset-x-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-bold text-lg leading-tight">Kareem Meenazi</p>
                      <p className="text-white/50 text-xs tracking-widest uppercase mt-0.5">Business Analyst</p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <MapPin size={10} className="text-white/40" />
                        <span className="text-white/40 text-[10px] tracking-wide">Hyderabad, IN</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/70 text-[10px] font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Single floating chip - top right only (Power BI) */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-xl text-center"
                initial={{ opacity: 0, y: -12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-[10px] text-[#505060] uppercase tracking-wider">Expertise</p>
                <p className="text-sm font-bold text-white mt-0.5">Power BI</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="flex items-center gap-4 mt-16 lg:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="rule max-w-[80px]" />
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-[11px] text-[#505060] hover:text-white transition-colors tracking-[0.2em] uppercase"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            Scroll to explore
            <ArrowDown size={12} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
