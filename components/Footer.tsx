'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 py-10 px-4" aria-label="Footer">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold gradient-text">Kareem Meenazi</p>
            <p className="text-xs text-slate-500 mt-1">Business Analyst &bull; Hyderabad, IN</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/kareem-meenazi-10013b265/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </motion.a>
            <motion.a
              href="mailto:Kareemmeenazi1116@icloud.com"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail size={16} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600/30 hover:text-indigo-300 transition-all"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Kareem Meenazi. All rights reserved.
          </p>
          <p className="text-xs text-slate-700">
            Built with Next.js &bull; Tailwind CSS &bull; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
