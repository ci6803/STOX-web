import React from "react";

function Card(props) {
  return (
    <div className="hero--card w-[7.37rem] h-[11.25rem]">
      <img src={props.img} alt={props.alt} />
      <h1>{props.name}</h1>
    </div>
  );
}

export default Card;
