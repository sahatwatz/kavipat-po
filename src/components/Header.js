import React, { useState, useEffect } from "react";
import { startImageSlideshow, handleImageFade } from "./Script";
import "../css/Header.css";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null); // ใช้เก็บภาพก่อนหน้า

  const images = [
    require("../assets/img/pic1.jpg"),
    require("../assets/img/pic2.jpg"),
    require("../assets/img/pic3.jpg")
  ];

  // เรียกใช้ฟังก์ชัน startImageSlideshow เพื่อเริ่มสไลด์ภาพ
  useEffect(() => {
    const stopSlideshow = startImageSlideshow(images, setCurrentImageIndex);
    console.log("Start slideshow"); // ตรวจสอบว่า slideshow ถูกเริ
    // ล้าง interval เมื่อ component ถูก unmount
    return () => stopSlideshow();
  }, []);

  // ใช้ useEffect เพื่อทำให้แอนิเมชัน fade ทำงาน
  useEffect(() => {
    if (prevImageIndex !== null && prevImageIndex !== currentImageIndex) {
      // เรียกใช้ฟังก์ชัน handleImageFade
      handleImageFade(currentImageIndex, prevImageIndex);
    }

    // อัพเดตค่า prevImageIndex หลังจากทุกครั้งที่เปลี่ยนภาพ
    setPrevImageIndex(currentImageIndex);
  }, [currentImageIndex]);

  return (
    <div className="container">
      <div className="head">
        <h1 className="fade-up">I'm Kavipat</h1>
        <h2 className="fade-up">an Architect</h2>
      </div>
      {/* แสดงภาพ */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slideshow Image ${index}`}
          className={`slideshow-image ${
            index === currentImageIndex ? "show" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Header;
