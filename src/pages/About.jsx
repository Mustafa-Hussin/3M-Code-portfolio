import React from 'react';
import { motion } from 'framer-motion';
import './pages.css';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm a passionate web developer with expertise in modern web technologies.
            I specialize in creating responsive and user-friendly web applications using
            React, JavaScript, and other cutting-edge tools.
          </p>
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">React</div>
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">HTML5</div>
            <div className="skill-item">CSS3</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Git</div>
          </div>
          <h2>Experience</h2>
          <p>
            With several years of experience in web development, I've worked on various
            projects ranging from small business websites to large-scale web applications.
            I'm passionate about creating clean, efficient, and maintainable code.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
