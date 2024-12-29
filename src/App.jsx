import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Speaking from "./pages/Speaking";
import ContactPage from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  
  return (
    <Router>
      <div id="up" className="container">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="divider" />
              <ProjectsSection />
              <div className="divider" />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <div className="divider" />
        <Footer />

        {showScrollBTN && (
          <a href="#up">
            <button className="scroll2Top icon-keyboard_arrow_up"></button>
          </a>
        )}
      </div>
    </Router>
  );
}

export default App;
