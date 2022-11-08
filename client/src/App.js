// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
