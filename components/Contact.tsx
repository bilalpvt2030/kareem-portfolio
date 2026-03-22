'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Connect with me professionally and explore my work history',
      href: 'https://www.linkedin.com/in/kareem-meenazi-10013b265/',
      color: 'from-blue-600 to-blue-500',
      bg: 'bg-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      description: "Drop me a message directly and I'll get back to you promptly",
      href: 'mailto:Kareemmeenazi1116@icloud.com',
      color: 'from-purple-600 to-purple-500',
      bg: 'bg-purple-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Message me on WhatsApp for quick conversations',
      href: 'https://wa.me/916304133270',
      color: 'from-green-600 to-green-500',
      bg: 'bg-green-600',
    },
  ];

  return (
    <section id="contact" className="section-padding relative bg-[rgba(8,8,16,0.8)]" aria-labelledby="contact-heading">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-3">GET IN TOUCH</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Open to new opportunities, collaborations, and business conversations. Reach out via LinkedIn, email, or WhatsApp.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center hover:border-slate-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
