import "./App.css";
import Header from "./components/Header.js";
import Gallery from "./components/Gallery.js";
import Slide from "./components/Slide.js";
import Middle from "./components/Middle.js";

function App() {
  return (
    <div className="app ">
      <Header />
      <Middle />
      <Gallery />
      {/* <Slide /> */}
    </div>
  );
}

export default App;
