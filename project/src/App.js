import logo from "./images/workspaces-24px (1).svg";
import "./App.css";
import Exhead from "./Exhead.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <Exhead></Exhead>
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="para">WE DESIGN YOUR SPACE</p>
      </header>
    </div>
  );
}

export default App;
