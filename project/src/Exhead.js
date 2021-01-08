import React from "react";
import "./App.css";
import logo from "./images/rgt.png";

function Exhead() {
  return (
    <div class="head">
      <img src={logo} className="image" alt="logo" />
      <div class="container">
        <div class="navbar">
          <a href="#HOME">HOME </a>
          <a href="#ABOUT">ABOUT </a>
          <a href="#CONTACT">CONTACT</a>
        </div>
      </div>
    </div>
  );
}

export default Exhead;
