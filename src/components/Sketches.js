import { useState } from "react";
import "../css/Sketches.css";

export default function Sketches() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic1.jpg"))}
      >
        <img
          src={require("../assets/img/pic1.jpg")}
          alt="Thumbnail 1"
          className="gallery-image"
        />
      </div>
      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic2.jpg"))}
      >
        <img
          src={require("../assets/img/pic2.jpg")}
          alt="Thumbnail 2"
          className="gallery-image"
        />
      </div>
      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>

      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>

      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>

      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>
      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>
      <div
        className="gallery-item"
        onClick={() => setSelectedImage(require("../assets/img/pic3.jpg"))}
      >
        <img
          src={require("../assets/img/pic3.jpg")}
          alt="Thumbnail 3"
          className="gallery-image"
        />
      </div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content">
            <img src={selectedImage} alt="Selected" className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
}
