import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { myProjects } from '../components/3-main/myProjects';
import './pages.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProject = myProjects.find(p => p.id === id);
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="project-not-found"
      >
        <h1>المشروع غير موجود</h1>
        <Link to="/projects" className="back-to-projects">
          العودة إلى المشاريع
        </Link>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="project-details-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div className="project-hero-section">
        <motion.div 
          className="project-hero-content"
          variants={itemVariants}
        >
          <div className="project-category-badges">
            {project.category.map((cat, index) => (
              <span key={index} className="category-badge">
                {cat}
              </span>
            ))}
          </div>
          <h1>{project.projectTitle}</h1>
          <p className="project-description">{project.description}</p>
          <div className="project-actions">
            {project.liveDemo && (
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-button"
              >
                <span className="icon-link"></span>
                معاينة المشروع
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="secondary-button"
              >
                <span className="icon-github"></span>
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="project-main-content">
        <motion.div 
          className="project-image-gallery"
          variants={itemVariants}
        >
          <div className="main-image">
            <img src={project.imgPath} alt={project.projectTitle} />
          </div>
          {/* Additional images can be added here */}
        </motion.div>

        <div className="project-info-grid">
          {/* Features Section */}
          <motion.div 
            className="project-features-section"
            variants={itemVariants}
          >
            <h2>المميزات الرئيسية</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="feature-icon">✨</div>
                  <h3>{feature}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div 
            className="project-technical-section"
            variants={itemVariants}
          >
            <h2>التفاصيل التقنية</h2>
            <div className="tech-stack">
              {project.category.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-icon"></span>
                  <span className="tech-name">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div 
          className="project-navigation"
          variants={itemVariants}
        >
          <Link to="/projects" className="back-to-projects">
            <span className="icon-arrow-right"></span>
            العودة إلى المشاريع
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
