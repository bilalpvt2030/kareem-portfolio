'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
    { name: 'Pursuits', href: '#pursuits' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[rgba(5,5,8,0.85)] backdrop-blur-2xl border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white font-bold text-base tracking-[0.15em] uppercase"
              whileHover={{ opacity: 0.7 }}
            >
              KM<span className="text-[rgba(180,160,255,0.6)]">/</span>
            </motion.button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <motion.button
                  key={l.name}
                  onClick={() => go(l.href)}
                  className="text-[13px] font-medium text-[#808090] hover:text-white transition-colors tracking-wide"
                  whileHover={{ y: -1 }}
                >
                  {l.name}
                </motion.button>
              ))}
              <motion.button
                onClick={() => go('#contact')}
                className="btn-primary text-xs px-5 py-2.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.button>
            </div>

            {/* Mobile */}
            <motion.button
              className="md:hidden text-[#808090] hover:text-white"
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.9 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[70px] inset-x-0 z-40 bg-[rgba(5,5,8,0.97)] backdrop-blur-2xl border-b border-white/[0.06] md:hidden"
          >
            <div className="px-5 py-8 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.button
                  key={l.name}
                  onClick={() => go(l.href)}
                  className="text-left text-base font-medium text-[#808090] hover:text-white transition-colors"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {l.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
