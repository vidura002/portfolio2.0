import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFigma } from 'react-icons/fa';

const projects = [
  {
    title: 'Design new wireframes and added prototypes',
    image: require('../pic/Screenshot 2025-07-25 at 06.44.59.png'),
    description: 'design creative Figma wireframes and build interactive prototypes, focusing on user-centered layouts that blend functionality with modern design aesthetics.',
    figma: 'https://www.figma.com/design/7OgL8ZsANueODEEwNxAXsc/Untitled?node-id=0-1&t=gtMBN5ff33AarmCA-1', 
    isFigma: true,
  },
  {
    title: 'Sky Sharing & Learning Platform',
    image: require('../pic/960x0.webp'),
    description: 'A modern web application designed to encourage collaborative learning by allowing users to share skills (like coding, cooking, photography, etc.) and track learning progress.',
    github: 'https://github.com/UdaraDulanjiDemel/Edunity-1.0',
  },
  {
    title: 'Fast Food Ordering System',
    image: require('../pic/Quick-Service-Restaurant-POS-System.png'),
    description: 'I developed a Fast Food Ordering System with a responsive frontend using HTML, CSS, and JavaScript, backed by a Java-based backend and MySQL for database management. The system supports dynamic menu browsing, order placement, and real-time data handling to streamline the ordering process.',
    github: 'https://github.com/vidura002/Fast-Food-Management-System.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-24 px-4">
      <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <img src={p.image} alt={p.title} className="h-48 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{p.description}</p>
              <div className="flex gap-4 mt-auto">
                {p.isFigma ? (
                  <a href={p.figma} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline flex items-center gap-1">
                    <FaFigma /> Figma
                  </a>
                ) : (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:underline flex items-center gap-1">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 