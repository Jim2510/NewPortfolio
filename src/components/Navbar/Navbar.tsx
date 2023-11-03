import "./navbar.css";
import logo from "../../assets/Logo.png";
import { Reveal } from "../../Reveal.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
      <button className="menu-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className={`links ${menuVisible ? "show" : ""}`}>
        <Reveal>
          <li>
            <a href="#home">
              <b>Home</b>
            </a>
          </li>
        </Reveal>
        <Reveal>
          <li>
            <a href="#about">
              <b>About</b>
            </a>
          </li>
        </Reveal>
        <Reveal>
          <li>
            <a href="#services">
              <b>Services</b>
            </a>
          </li>
        </Reveal>
        <Reveal>
          <li>
            <a href="#portfolio">
              <b>Portfolio</b>
            </a>
          </li>
        </Reveal>
        <Reveal>
          <li>
            <a href="#contact">
              <b>Contacts</b>
            </a>
          </li>
        </Reveal>
      </ul>
      <a href="#about" className={`action_btn ${menuVisible ? "hidden" : ""}`}>
        Start
      </a>
    </div>
  );
}
