import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/vidura002', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vidura-perera-45b814264/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, url: 'mailto:viduransilu2002@gmail.com', label: 'Email' },
  { icon: <FaFacebook />, url: 'https://www.facebook.com/vidu.perera.50', label: 'Facebook' },
];

export default function Home() {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center h-screen min-h-[600px] pt-24 pb-8 max-w-6xl mx-auto">
      {/* Left: Details */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col justify-center items-start z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center gap-3">
          Hi all, I'm Vidura <span className="text-4xl md:text-6xl">👋</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-500 dark:text-blue-400 mb-4">Undergraduate Student</h2>
        <p className="max-w-xl text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring boot and some other cool libraries and frameworks.
        </p>
        <div className="flex gap-3 mb-8">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500 text-white text-xl transition-colors"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <a
            href="#contact"
            className="flex-1 px-6 py-3 rounded bg-purple-600 hover:bg-purple-700 text-white font-semibold text-center transition-colors shadow"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex-1 px-6 py-3 rounded bg-purple-800 hover:bg-purple-900 text-white font-semibold text-center transition-colors shadow"
          >
            Download My Resume
          </a>
        </div>
      </motion.div>
      {/* Right: Developer working animation */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center items-center w-full h-72 md:h-[400px] relative mt-12 md:mt-0"
      >
        {/* Animated developer hand typing on laptop */}
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Desk shadow */}
          <ellipse cx="130" cy="230" rx="90" ry="18" fill="#232136" />
          {/* Laptop base */}
          <rect x="70" y="170" width="120" height="18" rx="6" fill="#7C3AED" />
          {/* Laptop screen */}
          <rect x="90" y="90" width="80" height="80" rx="10" fill="#A78BFA" />
          {/* Developer arm */}
          <motion.rect
            x="120" y="160" width="60" height="16" rx="8"
            fill="#FBBF24"
            animate={{ x: [120, 125, 120], rotate: [0, 2, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          {/* Developer hand */}
          <motion.circle
            cx="175" cy="168" r="10"
            fill="#FBBF24"
            animate={{ cy: [168, 172, 168] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  );
} 