import React from "react";
import "./Menu.css";
// import { Submenu, Category } from "./Category";
// import Submenu from "./Submenu";
import Category from "./Category";

function Menu() {
  const dailyItems = ["test1", "test2"];
  const sportsItems = [
    "SPORT SOCKS",
    "RUNNING SOCKS",
    "SKI SOCKS",
    "FLIGHT SOCKS",
    "HIKING SOCKS",
    "WORK SOCKS",
  ];
  return (
    <div className="menu" submenu={dailyItems}>
      <Category name="DAILY" submenu={dailyItems} />
      {/* <Submenu submenu={dailyItems} /> */}
      <hr className="p-0" />
      <Category name="SPORTS" submenu={sportsItems} />
      {/* <Submenu submenu={sportsItems} /> */}
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
