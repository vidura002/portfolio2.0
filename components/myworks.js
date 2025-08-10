import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaGithub, FaCloud, FaFigma } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiSelenium } from 'react-icons/si';

const techStack = [
  { icon: <FaHtml5 className="text-orange-500" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-blue-500" />, label: 'CSS3' },
  { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, label: 'ReactJS' },
  { icon: <FaNodeJs className="text-green-600" />, label: 'NodeJS' },
  { icon: <FaJava className="text-red-700" />, label: 'Java' },
  { icon: <FaPython className="text-yellow-300" />, label: 'Python' },
  { icon: <SiSpringboot className="text-green-700" />, label: 'Spring Boot' },
  { icon: <FaDatabase className="text-gray-400" />, label: 'SQL' },
  { icon: <SiMongodb className="text-green-500" />, label: 'MongoDB' },
  { icon: <FaGithub className="text-gray-300" />, label: 'GitHub' },
  { icon: <FaFigma className="text-pink-400" />, label: 'Figma' },
  { icon: <span className="text-2xl">📝</span>, label: 'draw.io' },
  { icon: <FaCloud className="text-blue-300" />, label: 'Cloud' },
  { icon: <span className="text-2xl">☁️</span>, label: 'Azure' },
  { icon: <SiSelenium className="text-green-400" />, label: 'Selenium' },
];

const skills = [
  {
    icon: '💻',
    title: 'Frontend Development',
    desc: 'React, HTML, CSS, JavaScript, Responsive, mobile-first design',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Wireframing, prototyping, and crafting modern, intuitive interfaces',
  },
  {
    icon: '🌐',
    title: 'Freelance Work',
    desc: 'Custom UI/UX designs for websites, web apps, and dashboards',
  },
  {
    icon: '🗄️',
    title: 'Database Management',
    desc: 'MS SQL Server, Oracle\nDesigning and managing relational databases, writing complex queries, stored procedures, and optimizing performance',
  },
  {
    icon: '☁️',
    title: 'Cloud Platforms',
    desc: 'Microsoft Azure, AWS\nDeploying, monitoring, and managing cloud infrastructure; experience with virtual machines, storage, and networking on both platforms',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Power BI, SQL Reporting\nBuilding interactive dashboards, visualizing KPIs, and extracting actionable insights from business data',
  },
];

export default function MyWorks() {
  return (
    <section id="myworks" className="max-w-6xl mx-auto py-24 px-4 flex flex-col md:flex-row items-center gap-12">
      {/* Left: SVG Illustration */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center min-h-[320px] relative"
      >
        {/* Animated floating circles */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-10 top-24 w-24 h-24 bg-blue-400 rounded-full shadow-lg opacity-80"
        />
        <motion.div
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-32 top-40 w-32 h-32 bg-purple-500 rounded-full shadow-xl opacity-80"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute left-48 top-16 w-16 h-16 bg-pink-400 rounded-full shadow-md opacity-80"
        />
      </motion.div>
      {/* Right: What I do and tech stack */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h3 className="text-4xl font-bold mb-4">What I do</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I design and develop modern web applications with a focus on clean user experiences and robust functionality. I combine creativity with technical skills to build user-friendly interfaces and full-stack systems.
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 mb-8">
          {techStack.map((tech) => (
            <div key={tech.label} className="flex flex-col items-center text-center">
              <span className="text-3xl mb-1">{tech.icon}</span>
              <span className="text-xs text-gray-400">{tech.label}</span>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {skills.map((s) => (
            <div key={s.title} className="flex items-start gap-3 text-base md:text-lg">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <span className="font-semibold">{s.title}</span> – {s.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 