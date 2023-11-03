import Background from "./comp/Background";
import Card from "./comp/Card";
import Title from "./comp/Title";
import {useState} from 'react';
import "./home.css";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export default function Home() {
    const [ref, inView] = useInView();

  return (
    <div className="home">
      <Background />
      <Title />
        <Card />
    </div>
  );
}
