import React from 'react';
import { motion } from 'framer-motion';
import './pages.css';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/projects/ecommerce.jpg"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/projects/task-app.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills",
      technologies: ["React", "Framer Motion", "CSS3"],
      image: "/projects/portfolio.jpg"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button className="view-project">View Project</button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
