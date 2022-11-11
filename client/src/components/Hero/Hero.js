// import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Hero.css";

function Hero() {
  // const [mouseStartPosition, setMouseStartPosition] = useState(0);
  // const [mouseEndPosition, setMouseEndPosition] = useState(0);
  // const [mouseClick, setMouseClick] = useState(false);
  // const [mouseDrag, setMouseDrag] = useState(false);

  // const mouseStartHandker = (e) => {
  //   speedUpAnimation();
  //   setMouseStartPosition(e.clientX);
  // };

  return (
    <div className="hero">
      <div className="carousel">
        <Card img="/images/running.png" alt="running" name="Running" />
        <Card img="/images/tenis.png" alt="tenis" name="Tenis" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        {/* <img src="/images/running.png" alt="fitness" />
        <img src="/images/tenis.png" alt="tenis" />
        <img src="/images/fitness.png" alt="fitness" />
        <img src="/images/fitness.png" alt="fitness" />
        <img src="/images/fitness.png" alt="fitness" /> */}
      </div>
    </div>
  );
}

export default Hero;
