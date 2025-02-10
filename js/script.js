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

const openModalFromDataKey = (key) => {
  const data = travelData[key]; // キーでデータを取得
  if (data) {
    openModal(data.title, data.year, data.description, data.img);
  } else {
    console.error("データが見つかりません:", key);
  }
};

document.querySelectorAll(".travel-list-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const id = event.currentTarget.closest(".travel-list-btn").dataset.id;
    console.log("選択されたID", id);
    openModalFromDataKey(id);
  });
});

const travelData = {
  philippin: {
    title: "フィリピン",
    year: "2018",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
    img: "./img/philippin.jpg",
  },
  malay: {
    title: "マレーシア",
    year: "2019",
    description: "ああああああああああああ...",
    img: "./img/Malay.jpg",
  },
  thailand: {
    title: "タイ",
    year: "2019",
    description: "ああああああああああああ...",
    img: "../img/thailand.jpg",
  },

  aus: {
    title: "オーストラリア",
    year: "2020",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
    img: "../img/Australia.jpg",
  },
  lasvegus: {
    title: "ラスベガス",
    year: "2024",
    description: "ああああああああああああ...",
    img: "../img/lasvegus.jpg",
  },
  newyork: {
    title: "ニューヨーク",
    year: "2024",
    description: "ああああああああああああ...",
    img: "../img/selfy.jpeg",
  },
};

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
