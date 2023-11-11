import "./about.css";
import { Reveal } from "../../../Reveal";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faReddit,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";



export default function About() {
  const skill = [
    {
      id: 1,
      sk: "html5",
    },
    {
      id: 2,
      sk: "css",
    },
    {
      id: 3,
      sk: "js",
    },
    {
      id: 4,
      sk: "sass",
    },
    {
      id: 5,
      sk: "typescript",
    },
    {
      id: 6,
      sk: "react",
    },
    {
      id: 7,
      sk: "node.js",
    },
    {
      id: 8,
      sk: "bootstrap",
    },
  ];

  const [skills] = useState(skill);

  return (
    <>
      <div className="master-container">
        <div className="container-about">
          
          <div className="about-text">
            <Reveal>
              <h1>About.</h1>
            </Reveal>
            <br />
            <Reveal>
              <p>
                Hello!, My name is Gianmarco, a working student engaged in the
                IT sector. Currently, I am employed at Ikea, where I have
                developed solid skills in the administrative and management
                field. However, my real passion lies in programming and I'm
                working diligently to build a career as a frontend developer.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I'm pursuing my studies in the field of programming, focusing on
                creating concrete projects that allow me to gain practical
                experience. I'm proficient in languages ​​like HTML, CSS, SASS,
                and JavaScript, and I'm eager to further my learning by
                exploring cutting-edge frameworks like React or Vue.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I am an ambitious and determined individual, always looking for
                new professional challenges that allow me to grow and further
                develop my skills in the field of programming. I'm open to
                opportunities that allow me to put my creativity and technical
                skills into practice, and I am enthusiastic about contributing
                to the success of innovative projects.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I am aware of the importance of continuous learning and I am
                constantly striving to keep up with the latest trends and
                technologies in the industry. I am a diligent, reliable and
                motivated contributor, and I am ready to take on the challenges
                that come my way in the pursuit of my passion for frontend
                development.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                In addition to my dedication to the world of programming, I
                cultivate a great passion for electronic music. Through the use
                of programs like Ableton, I enjoy creating and producing
                original pieces of music.
              </p>
            </Reveal>
            <br />
            <Reveal>
              <p>
                I am excited about what the future holds for me and look forward
                to new and challenging opportunities in the computer science and
                programming industry.
              </p>
            </Reveal>
          </div>
          
        </div>
        <div className="container-skills">
          <div className="container1">
            <Reveal>
              <h2>What I've learned</h2>
            </Reveal>
            <div className="subcontainer-skills">
              {skills.map((skills, index) => (
                <div className="cont-grey" key={index}>
                  <p>{skills.sk}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="container2"></div>
        </div>
      </div>
      <div className="links-about">
        <p>
          My links <span>→</span>{" "}
        </p>
        <a target="blank" href="https://github.com/Jim2510">
          <FontAwesomeIcon className="ico" icon={faGithub} />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/gianmarco-guglielmino-4803a1221/"
        >
          <FontAwesomeIcon className="ico" icon={faLinkedin} />
        </a>
        <a target="blank" href="https://www.reddit.com/?onetap_auto=true">
          <FontAwesomeIcon className="ico" icon={faReddit} />
        </a>
        <a target="blank" href="https://soundcloud.com/guglielmino2510">
          <FontAwesomeIcon className="ico" icon={faSoundcloud} />
        </a>
      </div>
    </>
  );
}
