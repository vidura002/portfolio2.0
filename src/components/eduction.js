import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    logo: require("../pic/course-icon-slit.png"),
    school: 'SLIIT - Sri Lanka Institute of Information Technology',
    degree: 'BSc (Hons) in Information Technology Specialising in Information Technology',
    description:
      "Pursuing a Bachelor's degree in Information Technology, BSc (Hons) in Information Technology Specialising in Information Technology. Gaining strong fundamentals in programming, system design, and full-stack web development.",
  },
  {
    logo: require("../pic/unnamed.jpg"),
    school: 'Royal College Colombo',
    dates: 'January 2019 - March 2022',
    description:
      'I completed my Advanced Level studies at Royal College, Colombo 7, one of Sri Lanka’s most prestigious institutions with a legacy dating back to 1835. Known for its rich tradition and academic excellence, Royal College fosters a multicultural environment that promotes critical thinking, leadership, and innovation, while continually adapting to meet the demands of a changing world.',
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto py-24 px-4">
      <h2 className="text-4xl font-bold mb-10">Education</h2>
      <div className="flex flex-col gap-10">
        {educationData.map((edu, i) => (
          <motion.div
            key={edu.school}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row items-start gap-6 bg-gray-800/60 rounded-xl p-6 shadow border border-gray-700"
          >
            <img
              src={edu.logo}
              alt={edu.school + ' logo'}
              className="w-20 h-20 rounded-full object-contain bg-white p-2 border border-gray-300 shadow"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-1">{edu.school}</h3>
              <div className="text-lg text-gray-200 font-medium mb-1">{edu.degree}</div>
              {edu.dates && <div className="text-gray-400 text-sm mb-1">{edu.dates}</div>}
              <p className="text-gray-300 text-base leading-relaxed">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 