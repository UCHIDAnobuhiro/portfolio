document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = Array.from(sliderWrapper.children);
  const slideWidth = slides[0].offsetWidth;
  let currentIndex = 0;

  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    sliderWrapper.appendChild(clone);
  });

  const moveSlider = () => {
    sliderWrapper.style.transition = "transform 0.5s linear";
    sliderWrapper.style.transform = `translateX(-${
      slideWidth * currentIndex
    }px)`;
    console.log(slideWidth * currentIndex);
  };

  const moveRight = () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(0)`;
      setTimeout(() => {
        sliderWrapper.style.transition = "transform 0.5s linear";
        moveSlider();
      }, 500);
    } else {
      moveSlider();
    }
  };

  const moveLeft = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(-${
        slideWidth * currentIndex
      }px)`;
      setTimeout(() => {
        sliderWrapper.style.transition = "transform 0.5s linear";
        moveSlider();
      }, 20);
    } else {
      moveSlider();
    }
  };

  const rightArrow = document.querySelector(".arrow-right");
  rightArrow.addEventListener("click", moveRight);

  const leftArrow = document.querySelector(".arrow-left");
  leftArrow.addEventListener("click", moveLeft);

  setInterval(moveRight, 2000);
});
