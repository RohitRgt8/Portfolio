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
        <div class="education">
          <h1 class="heading">Education</h1>
          <h2 class="subhead">AISCE</h2>
          <p class="desc"> ST. ANN'S PUBLIC SCHOOL </p>
          <p class="desc"> 2017 </p>
          <p class="desc"> 10.0 CGPA </p>
          <p> </p>
          <h2 class="subhead"> AISSCE </h2>
          <p class="desc"> ST. ANN'S PUBLIC SCHOOL </p>
          <p class="desc"> 2019 </p>
          <p class="desc"> 93.6 %</p>
          <p> </p>
          <h2 class="subhead"> B. Tech </h2>
          <p class="desc"> COMPUTER SCIENCE AND ENGINEERING </p>
          <p class="desc"> 2019 -2023 </p>
        </div>
        <div class="more">
          <h1 class="heading"> More </h1>
          <h2 class="sub">PROG LANG :</h2>
          <p class="desc">Python, Java, JavaScript, C, C++</p>
          <h2 class="sub"> INTERESTED FIELDS </h2>
          <p class="desc"> App Development (React - Native)</p>
          <p class="desc"> Web Development (React Js)</p>
        </div>
      </div>
    </div>
  );
}

export default Exhead;
