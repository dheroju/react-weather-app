import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lagos" />
        <footer>
          This project was coded by Aderoju Johnson and is{" "}
          <a
            href="https://github.com/dheroju/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
