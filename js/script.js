const openModal = (title, year, description, imgSrc) => {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-year").textContent = year;
  document.getElementById("modal-description").textContent = description;
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-img").alt = title;
  document.getElementById("modal").style.display = "flex";
};

const closeModal = () => {
  document.getElementById("modal").style.display = "none";
};

window.onclick = (event) => {
  if (event.target === document.getElementById("modal")) {
    closeModal();
  }
};
