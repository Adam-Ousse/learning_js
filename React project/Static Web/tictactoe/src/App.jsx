import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./Board";
import React from "react";

function App() {
  function clickX() {
    console.log("X");
  }
  return (
    <>
      <div className="container">
        <div className="choose">
          <button id="X">
            <div>X</div>
          </button>
          <button id="O">
            <div>O</div>
          </button>
        </div>

        <Board />
      </div>
    </>
  );
}

export default App;
