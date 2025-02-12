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

document
  .getElementsByClassName("close-btn")[0]
  .addEventListener("click", () => {
    closeModal();
  });

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
    description:
      "初めての海外旅行！ワクワクしながら街を歩いていると、なんとマクドナルドよりも ジョリビー というハンバーガー屋さんの方があちこちにあって驚いた。フィリピン名物らしく、あの赤いハチのマスコットがやたらと陽気で、妙に気になってしまった。そして、何より驚いたのは 物価の安さ！ゴルフの打ち放題が たったの120円！？ もはや気軽に打ちっぱなしに行くというより、毎日通ってプロを目指せそうなレベルだった。さらにマッサージも 600円ほど で受けられて、まるで夢のような価格設定。異国の風を感じながら、お得感たっぷりの体験ができて、最高の旅になった！",
    img: "./img/philippin.jpg",
  },
  malay: {
    title: "マレーシア",
    year: "2019",
    description:
      "マレーシアは、人口の約6割がイスラム教徒の国だった。イスラム教ではお酒が飲めなかったり、豚肉が食べられなかったりするので、「日本ではどうやってご飯を食べるんだろう？」と思っていたが、現地ではまったく問題なく普通に生活できた。大学の寮に泊まったのも貴重な経験だった。冷房がなく、水シャワーだったが、不思議と 1日で慣れてしまった。最初は「これは大変そうだ…」と思ったものの、意外と快適に過ごせて、自分の適応力にちょっと驚いた。",
    img: "./img/Malay.jpg",
  },
  thailand: {
    title: "タイ",
    year: "2019",
    description:
      "タイは思っていた以上に都会だった！首都バンコクに足を踏み入れると、目の前には東京のように高層ビルが立ち並び、「え、こんなに近代的なの！？」と驚いた。ナイトマーケットでは 人生初の値切り交渉 に挑戦！ドキドキしながら店員さんとやり取りをして、ついに服をゲット。日本では値切ることなんてないから、このやりとり自体が面白くて、なんだかゲーム感覚で楽しめた。ご飯は基本的に 辛いものだらけ！辛いものが苦手な自分は、食べるたびに汗だくになり、「うぅ、日本の味噌汁が恋しい…！」と思わずつぶやいてしまった。でも、それも含めて異国ならではの体験で、刺激的な旅になった！",
    img: "../img/thailand.jpg",
  },

  aus: {
    title: "オーストラリア",
    year: "2020",
    description:
      "オーストラリアでは 1ヶ月のホームステイ を経験した。左を見れば 美しい海、右を見れば 壮大な山々 が広がり、まさに自然に囲まれた国だった。普段なかなかできない サーフィン や スカイダイビング にも挑戦！最初はドキドキしたけれど、やってみると 最高に爽快で楽しかった。特にスカイダイビングで空から眺めた景色は、今でも忘れられない。ネイティブの英語は 驚くほど速く、さらに訛りもあって、最初は まったく聞き取れなかった。でも、毎日英語に囲まれて生活するうちに、少しずつ耳が慣れてきて、最後のほうには なんとなく意味がわかるようになった。自分の成長を実感できて、すごく充実した1ヶ月だった！",
    img: "../img/Australia.jpg",
  },
  lasvegus: {
    title: "ラスベガス",
    year: "2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae veritatis ab nihil porro enim ducimus soluta sapiente, optio rem vel obcaecati quaerat atque commodi, corrupti cum. Illum quo voluptas ut",
    img: "../img/lasvegus.jpg",
  },
  newyork: {
    title: "ニューヨーク",
    year: "2024",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae veritatis ab nihil porro enim ducimus soluta sapiente, optio rem vel obcaecati quaerat atque commodi, corrupti cum. Illum quo voluptas ut",
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
