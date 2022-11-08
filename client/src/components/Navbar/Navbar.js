import * as React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="nav--hamburger" onclick="myFunction(this)">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

export default Navbar;
