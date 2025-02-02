import React, { useEffect, useState } from "react";
import "../css/Gallery.css";

const images = [
  { src: require("../assets/img/pic1.jpg"), title: "Project 1" },
  { src: require("../assets/img/pic2.jpg"), title: "Project 2" },
  { src: require("../assets/img/pic3.jpg"), title: "Project 3" }
];

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // สร้าง IntersectionObserver เพื่อตรวจจับเมื่อ .middle2 ปรากฏ
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // แสดงเมื่อ 50% ของ .middle2 ปรากฏ
    );

    const element = document.querySelector(".middle2");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

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
      <div className="middle">
        <span>
          "God is in the details."<small>– Ludwig Mies van der Rohe</small>
        </span>
      </div>
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
      <div className="middle2">
        <img
          src="https://images2.alphacoders.com/506/thumb-1920-506335.png"
          alt="Description of image"
        />
        <div className={`overlay2 ${isVisible ? "fadeIn" : ""}`}>
          <span className={isVisible ? "slideUp" : ""}>big project</span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
