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
      color: 'bg-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Message me on WhatsApp for quick conversations',
      href: 'https://wa.me/916304133270',
      color: 'bg-green-500',
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'Drop me a message directly and I\'ll get back to you promptly',
      href: 'mailto:Kareemmeenazi1116@icloud.com',
      color: 'bg-purple-600',
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Open to new opportunities, collaborations, and business conversations. Reach out via LinkedIn, email, or WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((contact, i) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center hover:border-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${contact.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{contact.label}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{contact.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
