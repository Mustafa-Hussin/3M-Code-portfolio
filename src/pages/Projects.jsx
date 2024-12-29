import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './pages.css';

const Projects = () => {
  const projects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/projects/ecommerce.jpg",
      category: "Web Development"
    },
    {
      id: "task-management",
      title: "Task Management App",
      description: "A responsive task management application with real-time updates",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/projects/task-app.jpg",
      category: "Mobile App"
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills",
      technologies: ["React", "Framer Motion", "CSS3"],
      image: "/projects/portfolio.jpg",
      category: "UI/UX"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="page-container"
    >
      <h1>المشاريع</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            <Link to={`/projects/${project.id}`} className="project-link-wrapper">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="view-project">عرض المشروع</span>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
