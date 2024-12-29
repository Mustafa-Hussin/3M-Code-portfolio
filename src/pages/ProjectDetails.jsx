import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { myProjects } from '../components/3-main/myProjects';
import './pages.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const foundProject = myProjects.find(p => p.id === id);
    setProject(foundProject);
    window.scrollTo(0, 0);

    // Detect theme
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, [id]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="project-not-found"
      >
        <h1>المشروع غير موجود</h1>
        <Link to="/" className="back-to-projects">
          العودة إلى الرئيسية
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`project-details-container ${theme}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <motion.div
          className="project-hero-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{project.projectTitle}</h1>
          <div className="tech-badges">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="tech-badge"
                style={{
                  backgroundColor: tech.color,
                  color: tech.color === '#FFFFFF' ? '#000000' : '#FFFFFF'
                }}
              >
                <i className={`tech-icon ${tech.icon}`}></i>
                {tech.name}
              </span>
            ))}
          </div>
          <p className="project-description">{project.description}</p>
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div className="project-gallery">
        <div className="gallery-main">
          <button className="gallery-nav prev" onClick={prevImage}>
            &#10094;
          </button>
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex].path}
            alt={project.images[currentImageIndex].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <button className="gallery-nav next" onClick={nextImage}>
            &#10095;
          </button>
        </div>
        <p className="image-caption">{project.images[currentImageIndex].caption}</p>
        <div className="gallery-thumbnails">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img src={image.path} alt={image.caption} />
            </div>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="info-grid">
          <motion.div
            className="info-card client"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>العميل</h3>
            <p>{project.client}</p>
          </motion.div>
          <motion.div
            className="info-card date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>تاريخ التنفيذ</h3>
            <p>{project.date}</p>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>المميزات الرئيسية</h2>
        <div className="features-grid">
          {project.features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="challenge-solution">
        <motion.div
          className="section-card challenge"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>التحدي</h2>
          <p>{project.challenge}</p>
        </motion.div>
        <motion.div
          className="section-card solution"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2>الحل</h2>
          <p>{project.solution}</p>
        </motion.div>
      </div>

      {/* Project Links */}
      <div className="project-links">
        {project.liveDemo && (
          <motion.a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            معاينة المشروع
          </motion.a>
        )}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            GitHub
          </motion.a>
        )}
      </div>

      {/* Back Link */}
      <motion.div
        className="back-link"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="/" className="text-link">
          ← العودة إلى الرئيسية
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
