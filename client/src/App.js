// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {!isOpen ? (
        <div>
          <div className="nav--open">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg viewBox="0 0 85 78" width="24px" height="20px">
                <rect width="85" height="10"></rect>
                <rect y="31" width="85" height="10"></rect>
                <rect y="62" width="85" height="10"></rect>
              </svg>
            </button>
            <Navbar />
          </div>
          <hr className="p-0" />
        </div>
      ) : (
        <div>
          <div className="nav--open">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg viewBox="0 0 85 78" width="24px" height="20px">
                <rect width="85" height="10"></rect>
                <rect y="31" width="85" height="10"></rect>
                <rect y="62" width="85" height="10"></rect>
              </svg>
            </button>
            <Navbar />
          </div>
          <hr className="p-0" />
          <Hero />
          <hr className="p-0" />
          <Menu />
          <hr className="p-0" />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
