import './navbar.css';
import logo from '../../assets/Logo.png'
import {Reveal} from '../../Reveal.tsx';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="links">
        <Reveal>
        <li>
          <a href="#home">
            <b>Home</b>
          </a>
        </li>
        </Reveal>
        <Reveal><li>
          <a href="#about">
            <b>About</b>
          </a>
        </li></Reveal>
        <Reveal><li>
          <a href="#services">
            <b>Services</b>
          </a>
        </li></Reveal>
        <Reveal><li>
          <a href="#portfolio">
            <b>Portfolio</b>
          </a>
        </li></Reveal>
        <Reveal><li>
          <a href="#contact">
            <b>Contacts</b>
          </a>
        </li></Reveal>
      </ul>
      <a href="#about" className="action_btn">
        Start
      </a>
    </div>
  );
}
