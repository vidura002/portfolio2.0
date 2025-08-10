import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-8">
      <motion.img
        src={require("../pic/Screenshot 2025-07-24 at 03.43.17.png")}
        alt="Vidura Perera"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-500"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-2">About Me</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
        Hi! I'm Vidura Perera, a passionate frontend developer with a love for clean code and beautiful interfaces. I specialize in building responsive, accessible, and performant web apps using React and modern web technologies.When I’m not coding, I’m playing volleyball and enjoy staying active through other sports.
        </p>
      </motion.div>
    </section>
  );
} 