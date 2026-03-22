'use client';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Mail, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Connect with me professionally and explore my work history',
      href: 'https://www.linkedin.com/in/kareem-meenazi-10013b265/',
      color: '#2563EB',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Message me on WhatsApp for quick conversations',
      href: 'https://wa.me/916304133270',
      color: '#16A34A',
    },
    {
      icon: Mail,
      label: 'Email',
      description: 'Drop me a message directly and I\'ll get back to you promptly',
      href: 'mailto:Kareemmeenazi1116@icloud.com',
      color: '#7C3AED',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      } else {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.75rem',
    color: '#F0EDE8',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="contact" style={{ padding: '5rem 1.5rem', background: '#080808' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p style={{ color: '#C9A96E', fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get In Touch</p>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#F0EDE8', marginBottom: '1rem' }}>Let&apos;s Connect</h2>
          <p style={{ color: '#9A9490', maxWidth: '36rem', margin: '0 auto' }}>
            Open to new opportunities, collaborations, and business conversations.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '3.5rem' }}>
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'block',
                  padding: '1.75rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1.25rem',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <div style={{ width: '3rem', height: '3rem', borderRadius: '0.875rem', background: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <Icon size={22} color="#fff" />
                </div>
                <h3 style={{ color: '#F0EDE8', fontWeight: 600, marginBottom: '0.5rem' }}>{contact.label}</h3>
                <p style={{ color: '#9A9490', fontSize: '13px', lineHeight: 1.5 }}>{contact.description}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
          }}
        >
          <h3 style={{ color: '#F0EDE8', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Send a Message</h3>
          <p style={{ color: '#9A9490', fontSize: '14px', marginBottom: '2rem' }}>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>

          {status === 'success' ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem', textAlign: 'center' }}>
              <CheckCircle size={48} color="#16A34A" style={{ marginBottom: '1rem' }} />
              <h4 style={{ color: '#F0EDE8', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Sent!</h4>
              <p style={{ color: '#9A9490', marginBottom: '1.5rem' }}>Thank you for reaching out. Kareem will get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                style={{ padding: '0.6rem 1.5rem', background: '#C9A96E', color: '#0A0A0A', borderRadius: '0.75rem', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: '#9A9490', fontSize: '12px', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#9A9490', fontSize: '12px', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', color: '#9A9490', fontSize: '12px', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  style={inputStyle}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: '#9A9490', fontSize: '12px', fontWeight: 600, marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity or project..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#EF4444', fontSize: '14px', marginBottom: '1rem' }}>
                  <AlertCircle size={16} />
                  <span>{errorMsg}</span>
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.875rem 2rem',
                  background: status === 'loading' ? 'rgba(201,169,110,0.5)' : '#C9A96E',
                  color: '#0A0A0A',
                  borderRadius: '0.875rem',
                  border: 'none',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 0.2s',
                }}
              >
                {status === 'loading' ? (
                  <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
