import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MyWorks from './components/myworks';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <About />
        <MyWorks />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
