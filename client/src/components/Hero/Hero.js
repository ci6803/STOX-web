// import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="carousel">
        <Card img="/images/running.png" alt="running" name="Running" />
        <Card img="/images/tenis.png" alt="tennis" name="Tennis" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
      </div>
    </div>
  );
}

export default Hero;
