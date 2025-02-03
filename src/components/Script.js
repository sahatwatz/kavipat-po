// slideshow

export const startImageSlideshow = (images, setCurrentImageIndex) => {
  let currentIndex = 0;

  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    setCurrentImageIndex(currentIndex);
  }, 5000);

  return () => clearInterval(interval);
};

export const handleImageFade = (currentImageIndex, prevImageIndex) => {
  const prevImage =
    document.getElementsByClassName("slideshow-image")[prevImageIndex];
  const currentImage =
    document.getElementsByClassName("slideshow-image")[currentImageIndex];

  if (prevImage) {
    prevImage.classList.remove("show"); // ลบ class show ออกจากภาพก่อนหน้า
  }

  if (currentImage) {
    currentImage.classList.add("show"); // เพิ่ม class show ให้กับภาพปัจจุบัน
  }
};

let currentIndex = 0;

export const handleScroll = (event, sectionsRef) => {
  event.preventDefault();
  const sections = sectionsRef.current;

  if (!sections || sections.length === 0) return;

  // ป้องกัน currentIndex เกินขอบเขตของ sections
  currentIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));

  if (event.deltaY > 0 && currentIndex < sections.length - 1) {
    currentIndex++;
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
  }

  sections[currentIndex]?.scrollIntoView({ behavior: "smooth" });
};

export const setupScrollListener = (sectionsRef) => {
  const onScroll = (event) => {
    if (sectionsRef.current.length > 0) {
      handleScroll(event, sectionsRef);
    }
  };

  window.addEventListener("wheel", onScroll, { passive: false });

  return () => {
    window.removeEventListener("wheel", onScroll);
  };
};
