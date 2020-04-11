import React, { useState } from "react";
import logo from "../logo.svg";
import "../App.css";
// import Marquee from "react-simple-marquee";
import Marquee from "../Marquee";

const App = () => {
  const [marquee, setMarquee] = useState(false);

  setInterval(() => {
    setMarquee(!marquee);
  }, 2000);

  return (
    <div className="App">
      {marquee && <Marquee speed={10}>Testing</Marquee>}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
