import React from "react";
import "./App.css";
import logo from "./images/rgt.png";
import logo1 from "./images/IMG_8094.JPG";
import logo2 from "./images/laptop.jpg";
import Navbar from "react-bootstrap/Navbar";

function Exhead() {
  return (
    <div class="head">
      <div class="hom" id="HOME">
        <div class="header">
          <img src={logo} className="image" alt="logo" />

          <div class="container">
            <div class="navbar" fixed="top">
              <a href="#HOME">Home </a>
              <a href="#ABOUTME">About Me</a>
              <a href="#CAREER">Career</a>
              <a href="#CONTACTME">Contact Me</a>
            </div>
          </div>

          <div class="body">
            <p class="pbody">Hi, All!!</p>
            <p class="pbody">Welcome</p>
          </div>
        </div>
      </div>
      <div class="about" id="ABOUTME">
        <div class="am">
          <img src={logo1} class="myimg" alt="me" />
          <div class="bar2">
            <h1>About Me</h1>
            <p class="bio">
              Hi All. I'm Rohit George, a sophomore at Federal Institute of
              Science and Technology, undergoing the course B.Tech Computer
              Science and Engineering.
            </p>
            <p class="bio">
              An upcoming CS Engineering Student aspiring to be an experienced
              Full Stack Developer in the coming years.
            </p>
            <p class="bio">
              Had an interest in the field of Game Develpoment. Started learning
              and working on it and at the end failed.
            </p>
            <p class="bio">
              Thought of moving onto Web Development using Reactjs under the
              guidance of some amazing seniors, and now, trying to learn more in
              this field.
            </p>
            <p class="bio">
              Also working on App Development using React-Native, being mentored
              by some experienced seniors.
            </p>
            <p class="bio">Member of IEEE FISAT SB since 2019.</p>
          </div>
        </div>
      </div>
      <div class="career" id="CAREER">
        <div class="car"></div>
      </div>
    </div>
  );
}

export default Exhead;
