import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import './pages.css';

const ProjectDetails = () => {
  const { id } = useParams();

  // هذه البيانات يجب أن تأتي من مصدر البيانات الخاص بك
  const projectData = {
    title: "عنوان المشروع",
    description: "وصف تفصيلي للمشروع",
    category: "تصنيف المشروع",
    client: "اسم العميل",
    date: "تاريخ المشروع",
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "ميزة 1",
      "ميزة 2",
      "ميزة 3"
    ],
    images: [
      "/projects/project1-main.jpg",
      "/projects/project1-detail1.jpg",
      "/projects/project1-detail2.jpg"
    ],
    challenge: "تحديات المشروع وكيف تم حلها",
    solution: "الحل المقدم والنتائج",
    liveDemo: "https://example.com",
    githubRepo: "https://github.com/example"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-details-container"
    >
      {/* Hero Section */}
      <motion.div 
        className="project-hero"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>{projectData.title}</h1>
        <p className="project-category">{projectData.category}</p>
      </motion.div>

      {/* Main Image */}
      <motion.div 
        className="project-main-image"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={projectData.images[0]} alt={projectData.title} />
      </motion.div>

      {/* Project Info Grid */}
      <div className="project-info-grid">
        <div className="project-info-left">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>نظرة عامة</h2>
            <p>{projectData.description}</p>
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="project-features"
          >
            <h2>المميزات الرئيسية</h2>
            <ul>
              {projectData.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="project-info-right"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="project-meta">
            <div className="meta-item">
              <h3>العميل</h3>
              <p>{projectData.client}</p>
            </div>
            <div className="meta-item">
              <h3>التاريخ</h3>
              <p>{projectData.date}</p>
            </div>
            <div className="meta-item">
              <h3>التقنيات المستخدمة</h3>
              <div className="technologies-tags">
                {projectData.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Challenge & Solution */}
      <motion.div 
        className="project-challenge-solution"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="challenge">
          <h2>التحدي</h2>
          <p>{projectData.challenge}</p>
        </div>
        <div className="solution">
          <h2>الحل</h2>
          <p>{projectData.solution}</p>
        </div>
      </motion.div>

      {/* Project Gallery */}
      <motion.div 
        className="project-gallery"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>معرض الصور</h2>
        <div className="gallery-grid">
          {projectData.images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image} alt={`${projectData.title} - ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Links */}
      <motion.div 
        className="project-links"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {projectData.liveDemo && (
          <a href={projectData.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
            مشاهدة المشروع
          </a>
        )}
        {projectData.githubRepo && (
          <a href={projectData.githubRepo} target="_blank" rel="noopener noreferrer" className="project-link github">
            GitHub Repository
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
