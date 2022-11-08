import React from "react";
import Card from "./Card";

function Hero() {
  return (
    <div className="hero">
      <Card img="/images/running.png" alt="running" name="Running" />
      <Card img="/images/tenis.png" alt="tenis" name="Tenis" />
      <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
    </div>
  );
}

export default Hero;
