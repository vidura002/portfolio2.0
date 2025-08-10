import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socials = [
  {
    icon: <FaGithub />,
    label: 'GitHub',
    url: 'https://github.com/vidura002',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vidura-perera-45b814264/',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    url: 'mailto:viduransilu2002@gmail.com',
  },
  {
    icon: <FaFacebook />,
    label: 'Facebook',
    url: 'https://www.facebook.com/vidu.perera.50',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-12">
      {/* Left: Contact details */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center items-start"
      >
        <h2 className="text-5xl font-bold mb-2 flex items-center gap-3 text-gray-900 dark:text-white">
          Contact Me <span className="text-4xl">☎️</span>
        </h2>
        <div className="uppercase tracking-wide text-gray-700 dark:text-gray-300 text-lg mb-6 mt-2">
          Discuss a project or just want to say hi? My inbox is open for all.
        </div>
        <div className="text-2xl md:text-2xl font-semibold mb-1 text-blue-700 dark:text-white">70 1848 143 / +94-76 0505 271</div>
        <div className="text-1xl md:text-1xl font-medium mb-3 text-blue-700 dark:text-white">viduransilu2002@gmail.com</div>
        <div className="flex gap-4 mt-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 text-white text-2xl transition-colors"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>
      {/* Right: Envelope SVG illustration */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center w-full"
      >
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="180" height="100" rx="20" fill="#181825" stroke="#A78BFA" strokeWidth="8" />
          <polyline points="20,40 110,110 200,40" fill="none" stroke="#A78BFA" strokeWidth="8" />
          <rect x="20" y="40" width="180" height="100" rx="20" fill="none" stroke="#A78BFA" strokeWidth="8" />
          <ellipse cx="110" cy="150" rx="60" ry="10" fill="#A78BFA" opacity="0.2" />
          <circle cx="200" cy="30" r="6" fill="#A78BFA" opacity="0.5" />
          <circle cx="180" cy="20" r="4" fill="#A78BFA" opacity="0.3" />
          <circle cx="30" cy="30" r="4" fill="#A78BFA" opacity="0.3" />
          <rect x="170" y="120" width="12" height="12" rx="3" fill="#A78BFA" opacity="0.4" />
        </svg>
      </motion.div>
    </section>
  );
} 