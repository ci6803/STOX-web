import * as React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <img className="w-[132px] h-[17px]" src="/images/logo.png" alt="logo" />
      <div className="nav--bag">
        <img
          className="w-[1.06rem] h-[1.468rem]"
          src="/images/bag.svg"
          alt="shoppingBag"
        />
        <p>0</p>
      </div>
    </div>
  );
}

export default Navbar;
