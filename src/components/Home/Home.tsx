import Background from "./comp/Background";
import Card from "./comp/Card";
import Title from "./comp/Title";
import "./home.css";


export default function Home() {

  return (
    <div className="home">
      <Background />
      <Title />
        <Card />
    </div>
  );
}
