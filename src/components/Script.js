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
