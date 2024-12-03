import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Main from "../3-main/Main";
import DigitalMarketing from "../digital-marketing/DigitalMarketing";
import UIUX from "../uiux/UIUX";
import "./projectsSection.css";

const ProjectsSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: "programming",
      title: "تطوير البرمجيات",
      icon: "💻",
      description: "تطوير تطبيقات الويب والموبايل باستخدام أحدث التقنيات",
      component: Main
    },
    {
      id: "marketing",
      title: "التسويق الرقمي",
      icon: "📱",
      description: "استراتيجيات تسويقية متكاملة لتنمية عملك على الإنترنت",
      component: DigitalMarketing
    },
    {
      id: "design",
      title: "تصميم UI/UX",
      icon: "🎨",
      description: "تصميم واجهات مستخدم جذابة وسهلة الاستخدام",
      component: UIUX
    }
  ];

  const toggleSection = (sectionId) => {
    if (openSection === sectionId) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionId);
    }
  };

  return (
    <div className="projects-container">
      {sections.map((section) => (
        <motion.div 
          key={section.id} 
          className="section-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={`section-header ${openSection === section.id ? 'active' : ''}`}
            onClick={() => toggleSection(section.id)}
          >
            <div className="section-icon">{section.icon}</div>
            <div className="section-info">
              <h2 className="section-title">{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>
            <span className={`arrow-icon ${openSection === section.id ? 'open' : ''}`}>
              ▼
            </span>
          </button>
          
          <AnimatePresence>
            {openSection === section.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="section-content"
              >
                <section.component />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsSection;
