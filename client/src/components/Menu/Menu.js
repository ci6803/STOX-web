import React from "react";
import "./Menu.css";
import Category from "./Category";

function Menu() {
  const dailyItems = [
    { title: "HOME SOCKS", number: 25 },
    { title: "BEDROOM SOCKS", number: 25 },
    { title: "WARM SOCKS", number: 25 },
  ];
  const sportsItems = [
    { title: "TENNIS SOCKS", number: 14 },
    { title: "RUNNING SOCKS", number: 3 },
    { title: "SKI SOCKS", number: 20 },
    { title: "HIKING SOCKS", number: 14 },
    { title: "GYM SOCKS", number: 20 },
  ];

  const travelItems = [
    { title: "SPORT SOCKS", number: 14 },
    { title: "RUNNING SOCKS", number: 3 },
    { title: "SKI SOCKS", number: 20 },
    { title: "FLIGHT SOCKS", number: 24 },
    { title: "HIKING SOCKS", number: 14 },
  ];

  const medicalItems = [
    { title: "SURGICAL SOCKS", number: 15 },
    { title: "COMPRESSION SOCKS", number: 30 },
  ];

  const moreItems = [
    { title: "WORK SOCKS", number: 17 },
    { title: "LEGGINGS", number: 3 },
  ];

  return (
    <div className="menu">
      <Category name="DAILY" submenu={dailyItems} />
      <hr className="p-0" />
      <Category name="SPORTS" submenu={sportsItems} />
      <hr className="p-0" />
      <Category name="TRAVEL" submenu={travelItems} />
      <hr className="p-0" />
      <Category name="MEDICAL" submenu={medicalItems} />
      <hr className="p-0" />
      <Category name="MORE" submenu={moreItems} />
      <hr className="p-0" />
    </div>
  );
}

export default Menu;
