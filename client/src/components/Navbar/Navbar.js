import * as React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <img
        className="w-[8.25rem] h-[1.0625rem]"
        src="/images/logo.png"
        alt="logo"
      />
      <div className="nav--bag">
        <img
          className="w-[1.06rem] h-[1.4rem]"
          src="/images/bag.png"
          alt="shoppingBag"
        />
        <p>0</p>
      </div>
    </div>
  );
}

export default Navbar;
