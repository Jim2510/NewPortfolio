import "./navbar.css";
import logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

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
            <a href="#rotate-words">
              <b>Home</b>
            </a>
          </li>
          <li>
            <a href="#about">
              <b>About</b>
            </a>
          </li>
          <li>
            <a href="#services">
              <b>Services</b>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <b>Portfolio</b>
            </a>
          </li>
          <li>
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
