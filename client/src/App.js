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
              <svg
                className="w-[1.25rem] h-[1.13rem]"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="hamburgerIconTitle"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                color="#000000"
              >
                {" "}
                <title id="hamburgerIconTitle">Menu</title>{" "}
                <path d="M6 7L18 7M6 12L18 12M6 17L18 17" />{" "}
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
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="hamburgerIconTitle"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                color="#000000"
              >
                {" "}
                <title id="hamburgerIconTitle">Menu</title>{" "}
                <path d="M6 7L18 7M6 12L18 12M6 17L18 17" />{" "}
              </svg>
            </button>
            <Navbar />
          </div>
          <hr className="p-0" />
        </div>
      )}
      <div
        className={`${
          isOpen ? "translate-y-0" : "translate-y-full"
        } ease-in-out duration-300`}
      >
        <Hero />
        <hr className="p-0" />
        <Menu />
        <hr className="p-0" />
        <Footer />{" "}
      </div>
    </div>
  );
}

export default App;
