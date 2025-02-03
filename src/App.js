import "./App.css";
import React, { useEffect, useRef } from "react";
import Header from "./components/Header.js";
import Gallery from "./components/Gallery.js";
import Middle from "./components/Middle.js";
import { setupScrollListener } from "./components/Script.js";
import Navbar from "./components/Navbar.js";

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.filter((el) => el !== null);
    const cleanup = setupScrollListener(sectionsRef);
    return cleanup;
  }, []);

  return (
    <div className="app ">
      <Navbar />
      <div id="Home" ref={(el) => (sectionsRef.current[0] = el)}>
        <Header />
      </div>
      <div id="Projects" ref={(el) => (sectionsRef.current[1] = el)}>
        <Middle />
      </div>
      {/* <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Gallery />
      </div> */}

      {/*
      <Slide /> */}
    </div>
  );
}

export default App;
