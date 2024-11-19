import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Projects from "./pages/Projects";
import Speaking from "./pages/Speaking";
import ContactPage from "./pages/Contact";

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
              <Main />
              <div className="divider" />
              <Contact />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <div className="divider" />
        <Footer />

        <a style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }} href="#up">
          <button className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
      </div>
    </Router>
  );
}

export default App;
