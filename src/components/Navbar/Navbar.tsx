import "./navbar.css";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setSelectedMenuItem(sectionId || ""); // Usa "" come valore di fallback
        } else {
          setSelectedMenuItem("");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <button className={`menu-button ${menuVisible ? "active" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuVisible ? faTimes : faBars} />
      </button>
      <ul className={`links ${menuVisible ? "show" : ""}`}>
      <li>
      <a className={selectedMenuItem === 'home' || selectedMenuItem === '' ? 'selected' : ''} href="#home">
              <b>Home</b>
            </a>
          </li>
          <li className={selectedMenuItem === 'home' ? 'selected' : ''}>
            <a href="#about">
              <b>About</b>
            </a>
          </li>
          <li className={selectedMenuItem === 'home' ? 'selected' : ''}>
            <a href="#services">
              <b>Services</b>
            </a>
          </li>
          <li className={selectedMenuItem === 'home' ? 'selected' : ''}>
            <a href="#portfolio">
              <b>Portfolio</b>
            </a>
          </li>
          <li className={selectedMenuItem === 'home' ? 'selected' : ''}>
            <a href="#contact">
              <b>Contacts</b>
            </a>
          </li>
      </ul>
      <a href="#about" className={`action_btn ${menuVisible ? "hidden" : ""}`}>
        Start
      </a>
    </div>
  );
}
