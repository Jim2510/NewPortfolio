import About from "./comp/About";
import Background from "./comp/Background";
import Card from "./comp/Card";
import Projects from "./comp/Projects";
import Title from "./comp/Title";
import "./home.css";


export default function Home() {

  return (
    <div className="home">
      <Background />
      <Title />
        <Card />
        <About />
        <Projects />
    </div>
  );
}
