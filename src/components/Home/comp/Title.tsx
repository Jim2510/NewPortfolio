import "./title.css";
import { useState } from "react";

export default function Title() {
  const titles = [
    {
      id: 1,
      main: "Hello, I'm Gim",
      sub: 'Front end developer',
    },
    {
      id: 2,
      main: 'Turning ideas into interactive designs.',
      sub: 'You choose, I create',
    },
    {
      id: 3,
      main: 'Dedicated to crafting amazing web apps.',
      sub: 'What do you need?',
    },
    {
      id: 4,
      main: 'Bringing creativity to code',
      sub: 'Innovation is the keyword',
    },
    {
      id: 5,
      main: 'Delivering outstanding user experiences.',
      sub: 'Elevating User Experiences',
    },
    {
      id: 6,
      main: 'Passionate about the art of programming.',
      sub: 'Passionately Crafting Code',
    },
    {
      id: 7,
      main: 'Cutting-edge front-end development.',
      sub: 'Staying on the Cutting Edge of Web Development',
    },
    {
      id: 8,
      main: 'From lines of code to beautiful designs.',
      sub: 'Where Code Meets Aesthetics',
    },
  ]

  const [titl] = useState(titles)
  return (
  
  <div id="rotate-words">
     {titl.map((titl, index) => (
      <div key={index}>
        {titl.main}
        <br />
        <span>{titl.sub}</span>
      </div>
     ))}

    
      {/* <div>
      Hello, I'm Gim
        <br /> <span>Front end developer</span>
      </div>
      <div>
      Turning ideas into interactive designs.
        <br /> <span>You choose, I create</span>
      </div>
      <div>
      Dedicated to crafting amazing web apps.
        <br /> <span>What do you need?</span>
      </div>
      <div>
      Bringing creativity to code.
        <br /> <span>Innovation is the keyword</span>
      </div>
      <div>
      Delivering outstanding user experiences.
        <br /> <span>Elevating User Experiences</span>
      </div>
      <div>
      Passionate about the art of programming.
        <br /> <span>Passionately Crafting Code</span>
      </div>
      <div>
      Cutting-edge front-end development.
        <br /> <span>Staying on the Cutting Edge of Web Development</span>
      </div>
      <div>
      From lines of code to beautiful designs.
        <br /> <span>Where Code Meets Aesthetics</span>
      </div> */}
    </div>
  );
}
