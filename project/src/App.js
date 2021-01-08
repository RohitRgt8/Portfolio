import logo from "./images/workspaces-24px (1).svg";
import "./App.css";
import Exhead from "./Exhead.js";
import React from "react";
import Exfoot from "./Exfoot.js";

function App() {
  return (
    <div className="App">
      <Exhead></Exhead>
      <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="para">DON'T JUST SURVIVE, THRIVE!!</p>
      </header>
      <Exfoot></Exfoot>
    </div>
  );
}

export default App;
