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
  if (prevImageIndex !== null) {
    const prevImage =
      document.getElementsByClassName("slideshow-image")[prevImageIndex];
    const currentImage =
      document.getElementsByClassName("slideshow-image")[currentImageIndex];

    prevImage.classList.remove("show");
    currentImage.classList.add("show");
  }

  return currentImageIndex;
};
