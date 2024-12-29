import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    // تحديث حالة السمة عند تحميل الصفحة
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    
    // تطبيق الفلتر المناسب على الصور
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (isDark) {
        img.style.filter = 'brightness(0.8) contrast(1.2)';
      } else {
        img.style.filter = 'none';
      }
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.toggle('dark');
    
    // تحديث الفلتر على الصور عند تغيير السمة
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (newTheme === 'dark') {
        img.style.filter = 'brightness(0.8) contrast(1.2)';
      } else {
        img.style.filter = 'none';
      }
    });
  };

  return (
    <header className="flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={toggleTheme}
        className="mode flex"
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-close"
              ></button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
