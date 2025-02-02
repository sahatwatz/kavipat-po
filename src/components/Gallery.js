import React from "react";
import "../css/Gallery.css";

const images = [
  { src: require("../assets/img/pic1.jpg"), title: "Project 1" },
  { src: require("../assets/img/pic2.jpg"), title: "Project 2" },
  { src: require("../assets/img/pic3.jpg"), title: "Project 3" },
  { src: require("../assets/img/pic1.jpg"), title: "Project 1" },
  { src: require("../assets/img/pic2.jpg"), title: "Project 2" },
  { src: require("../assets/img/pic3.jpg"), title: "Project 3" },
  { src: require("../assets/img/pic1.jpg"), title: "Project 1" },
  { src: require("../assets/img/pic2.jpg"), title: "Project 2" }
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-container">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.title} />
            <div className="overlay">
              <span>{image.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
