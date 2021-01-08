import React from "react";
import "./App.css";
import logo1 from "./images/line-instagram.png";

function Exfoot() {
  return (
    <div>
      <a href="#popup1" class="btn">
        CONTACT ME
      </a>
      <div id="popup1" class="popup">
        <a href="#" class="close">
          &times;
        </a>
        <h2>SOCIAL MEDIA</h2>
        <a href="https://www.instagram.com/rohit_georgergt8/">
          <img src={logo1} class="image" alt="insta" />
        </a>
        <a href="#" class="close-popup"></a>
      </div>
    </div>
  );
}
export default Exfoot;
