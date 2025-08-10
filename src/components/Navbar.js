import React, { useState } from 'react';
import { FaMoon, FaSun, FaDownload } from 'react-icons/fa';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-lg tracking-tight cursor-pointer" onClick={() => handleScroll('home')}>
          Vidura Perera
        </div>
        <div className="flex items-center gap-4">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="hover:text-blue-500 transition-colors px-2 py-1 rounded focus:outline-none"
            >
              {s.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm font-medium ml-2"
          >
            <FaDownload /> Resume
          </a>
          <button
            onClick={() => setDark((d) => !d)}
            className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
} 