// import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="slide">
        <Card img="/images/running.png" alt="running" name="Running" />
        <Card img="/images/tennis.png" alt="tennis" name="Tennis" />
        <Card img="/images/fitness.png" alt="fitness" name="Fitness" />
        <Card img="/images/running.png" alt="running" name="Running" />
        <Card img="/images/tennis.png" alt="tennis" name="Tennis" />
      </div>
    </div>
  );
}

export default Hero;
