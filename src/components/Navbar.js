import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const sections = [
  "Home",
  "Projects-1",
  "Projects-2",
  "Projects-3",
  "Sketches",
  "About"
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      let currentSection = "Home";
      let currentBgColor = "white";

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight / 2 &&
          section.getBoundingClientRect().bottom >= window.innerHeight / 2
        ) {
          currentSection = sections[i];
          currentBgColor = window.getComputedStyle(section).backgroundColor;
        }
      }

      setActiveSection(currentSection);
      setTextColor(getContrastColor(currentBgColor));
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // ฟังก์ชันคำนวณสีข้อความที่ contrast กับพื้นหลัง
  const getContrastColor = (bgColor) => {
    if (!bgColor.startsWith("rgb")) return "white"; // เผื่อค่าเป็น transparent หรือ invalid

    const rgb = bgColor.match(/\d+/g).map(Number); // แยกค่า RGB
    const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;

    return brightness > 128 ? "black" : "white"; // ถ้าสว่างมากใช้สีดำ ถ้ามืดใช้สีขาว
  };

  return (
    <nav className="navbar" style={{ color: textColor }}>
      <ul>
        {sections.map((section) => (
          <li key={section} onClick={() => scrollToSection(section)}>
            <span
              className={`dot ${activeSection === section ? "filled" : ""}`}
              style={{ borderColor: textColor }}
            ></span>
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
