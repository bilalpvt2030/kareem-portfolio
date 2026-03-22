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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              fontWeight: 700,
              fontSize: '17px',
              letterSpacing: '0.05em',
              color: '#F0EDE8',
              textDecoration: 'none',
            }}
          >
            KM<span style={{ color: '#C9C0B0' }}>/</span>
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#9A9490',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F0EDE8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9A9490')}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                padding: '0.45rem 1.2rem',
                background: '#C9C0B0',
                color: '#0A0A0A',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.03em',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#D8D0C2')}
              onMouseLeave={e => (e.currentTarget.style.background = '#C9C0B0')}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{ color: '#9A9490', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#111111',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ color: '#9A9490', fontSize: '14px', fontWeight: 500, textDecoration: 'none', padding: '0.4rem 0' }}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                style={{ color: '#0A0A0A', background: '#C9C0B0', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', textAlign: 'center', marginTop: '0.5rem' }}
                onClick={() => setOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
