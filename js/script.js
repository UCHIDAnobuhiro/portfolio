const topBtn = document.getElementById("top-btn");
topBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    topBtn.style.opacity = "1";
  } else if (window.screenY < 150) {
    topBtn.style.opacity = "0";
  }
});
