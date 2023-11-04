import "./projects.css";
import { useState } from "react";
import img1 from "../../../assets/scrnli_5_6_2023_15-20-26.png";
import img2 from "../../../assets/Screenshot 2023-10-29 175923.png";
import img3 from "../../../assets/Screenshot 2023-10-29 211448.png";
import img4 from "../../../assets/Immagine 2023-09-04 233135.png";
import { Reveal } from "../../../Reveal";

export default function Projects() {
  const cards = [
    {
      id: 1,
      img: img1,
      title: "Progetto Front end Hackernews",
      tec: "lodash, axios, node.js",
      description:
        "Progetto che integra l'API di hackernews per visualizzare le news in tempo reale",
    },
    {
      id: 2,
      img: img2,
      title: "TechnoMachine blog",
      tec: "",
      description: "",
    },
    {
      id: 3,
      img: img3,
      title: "Menù interattivo",
      tec: "",
      description: "",
    },
    {
      id: 4,
      img: img4,
      title: "App per ricerca titoli libri",
      tec: "",
      description: "",
    },
  ];

  const [projects] = useState(cards);

  return (
    <>
      <div className="cont-title-proj">
        <Reveal>
          <h2 className="title-proj">Project.</h2>
        </Reveal>
        <hr className="clr" />
      </div>
      <div className="container-crd">
        {projects.map((card) => (
          <div className="card-proj" key={card.id}>
            <div className="container-info">
              <img src={card.img} alt="" />
              <Reveal>
                <h4>{card.title}</h4>
              </Reveal>
              <Reveal>
                <p className="tec">{card.tec}</p>
              </Reveal>
              <Reveal>
                <p>{card.description}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
