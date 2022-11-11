import React from "react";
import "./Menu.css";
import Category from "./Category";

function Menu() {
  const dailyItems = [
    { title: "test1", number: 25 },
    { title: "test2", number: 25 },
  ];
  const sportsItems = [
    "SPORT SOCKS",
    "RUNNING SOCKS",
    "SKI SOCKS",
    "FLIGHT SOCKS",
    "HIKING SOCKS",
    "WORK SOCKS",
  ];
  return (
    <div className="menu">
      <Category name="DAILY" submenu={dailyItems} />
      <hr className="p-0" />
      <Category name="SPORTS" submenu={sportsItems} />
      <hr className="p-0" />
      <Category name="TRAVEL" />
      <hr className="p-0" />
      <Category name="MEDICAL" />
      <hr className="p-0" />
      <Category name="MORE" />
      <hr className="p-0" />
    </div>
  );
}

export default Menu;
