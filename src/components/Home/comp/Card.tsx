import "./comp.css";
import { useState } from "react";
import img1 from "../../../assets/My project-1.png";
import img2 from "../../../assets/ml.jpeg";
import img3 from "../../../assets/coding.jpg";
import { Fade } from "react-awesome-reveal";
import {Reveal} from '../../../Reveal'

export default function Card() {
  
  const initialCards = [
    {
      imgSrc: img2,
      title: 'From Milan',
      subTitle: 'With Love',
      description: 'professioanlità, capacità di adattamento e problem solving'
    },
    {
      imgSrc: img1,
      title: 'Gianmarco',
      subTitle: 'Front end Developer',
      description: 'I love building beautiful user interfaces'
    },
    {
      imgSrc: img3,
      title: 'Coding',
      subTitle: "Let's check my works",
      description: 'Look at some of my recent works'
    },
    
  ]
  const [cards, setCards] = useState(initialCards);
  return (
    // <div className="home-title">

    // </div>

    <div className="ds">
      <div className="opac">
      {cards.map((card, index) => (
    // <Fade key={index} cascade damping={0.3}>
    <Reveal key={index}>
      <figure className="snip1477 opa">
        <img src={card.imgSrc} alt={`sample${index}`} />
        <div className="title">
          <div>
            <h2>{card.title}</h2>
            <h4>{card.subTitle}</h4>
          </div>
        </div>
        <figcaption>
          <p>{card.description}</p>
        </figcaption>
        <a href="#"></a>
      </figure>
      </Reveal>
    // </Fade>
  ))}
      </div>
    </div>
  );
}
