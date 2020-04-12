import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.css";
// import Marquee from "react-simple-marquee";
// import Marquee from "../Marquee";
import Flipclock from "react-simple-flipclock";

const App = () => {
  const [marquee, setMarquee] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setMarquee(prevMarquee => !prevMarquee);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {/*{marquee && <Marquee speed={10}>Testing</Marquee>}*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Flipclock seconds={20 * 60 * 60} dark fontSize={48} />
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
