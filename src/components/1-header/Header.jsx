import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

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
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/speaking">Speaking</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to localStorage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // Get value from localStorage
          setTheme(localStorage.getItem("currentMode"));
        }}
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
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/speaking">Speaking</Link>
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
