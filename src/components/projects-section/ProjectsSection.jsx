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
      component: Main
    },
    {
      id: "marketing",
      title: "التسويق الرقمي",
      icon: "📱",
      component: DigitalMarketing
    },
    {
      id: "design",
      title: "تصميم UI/UX",
      icon: "🎨",
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
        <div key={section.id} className="section-wrapper">
          <button
            className={`section-header ${openSection === section.id ? 'active' : ''}`}
            onClick={() => toggleSection(section.id)}
          >
            <span className="section-icon">{section.icon}</span>
            <h2 className="section-title">{section.title}</h2>
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
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
