import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { myProjects } from '../components/3-main/myProjects';
import './pages.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = myProjects.find(p => p.id === id);
    setProject(foundProject);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

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
      className="project-details-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="project-hero">
        <div className="project-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1>{project.projectTitle}</h1>
            <div className="project-categories">
              {project.category.map((cat, index) => (
                <span key={index} className="category-badge">
                  {cat}
                </span>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        {/* Project Image */}
        <motion.div
          className="project-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={project.imgPath} alt={project.projectTitle} />
        </motion.div>

        {/* Project Info Grid */}
        <div className="project-info-grid">
          {/* Client & Date */}
          <motion.div
            className="info-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="info-item">
              <h3>العميل</h3>
              <p>{project.client}</p>
            </div>
            <div className="info-item">
              <h3>التاريخ</h3>
              <p>{project.date}</p>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="info-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3>التقنيات المستخدمة</h3>
            <div className="tech-stack">
              {project.category.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-icon"></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="features-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>المميزات الرئيسية</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="feature-icon">✨</div>
                <h3>{feature}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="challenge-solution-grid">
          <motion.div
            className="grid-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2>التحدي</h2>
            <p>{project.challenge}</p>
          </motion.div>
          <motion.div
            className="grid-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2>الحل</h2>
            <p>{project.solution}</p>
          </motion.div>
        </div>

        {/* Project Links */}
        <motion.div
          className="project-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <span>مشاهدة المشروع</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <span>GitHub</span>
            </a>
          )}
        </motion.div>

        {/* Back Link */}
        <motion.div
          className="back-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <Link to="/" className="text-link">
            ← العودة إلى الرئيسية
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
