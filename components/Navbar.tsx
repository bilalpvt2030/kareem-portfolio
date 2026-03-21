'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,10,15,0.9)] backdrop-blur-xl border-b border-[rgba(99,102,241,0.15)] shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-xl font-bold gradient-text tracking-tight"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              KM
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 relative group"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(10,10,15,0.97)] backdrop-blur-xl border-b border-[rgba(99,102,241,0.15)] md:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="mt-2 px-4 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
