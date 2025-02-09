import "./App.css";
import React, { useEffect, useRef } from "react";
import Header from "./components/Header.js";
// import Gallery from "./components/Gallery.js";
import Middle from "./components/Middle.js";
import { setupScrollListener } from "./components/Script.js";
import Navbar from "./components/Navbar.js";
import Middle2 from "./components/Middle2.js";
import Sketches from "./components/Sketches.js";
import About from "./components/About.js";

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
      <div id="Projects-1" ref={(el) => (sectionsRef.current[1] = el)}>
        <Middle />
      </div>
      <div id="Projects-2" ref={(el) => (sectionsRef.current[2] = el)}>
        <Middle2 />
      </div>
      <div id="Projects-3" ref={(el) => (sectionsRef.current[3] = el)}>
        <Middle2 />
      </div>
      <div id="Sketches" ref={(el) => (sectionsRef.current[4] = el)}>
        <Sketches />
      </div>
      <div id="About" ref={(el) => (sectionsRef.current[5] = el)}>
        <About />
      </div>
    </div>
  );
}

export default App;
