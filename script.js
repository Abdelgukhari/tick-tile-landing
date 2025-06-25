const phone = "201029699335"; // ← رقم واتسابك

const watches = [
  {
    name: "Metal Carier Skeleton",
    images: [
      "images/skeleton1.jpg",
      "images/skeleton2.jpg",
      "images/skeleton3.jpg",
      "images/skeleton4.jpg"
    ]
  },
  {
    name: "Casio Metal",
    images: [
      "images/casio1.jpg",
      "images/casio2.jpg",
      "images/casio3.jpg",
      "images/casio4.jpg",
      "images/casio5.jpg",
      "images/casio6.jpg",
      "images/casio7.jpg",
      "images/casio8.jpg",
      "images/casio9.jpg",
      "images/casio10.jpg",
      "images/casio11.jpg",
      "images/casio12.jpg",
      "images/casio13.jpg"
    ]
  },
  {
    name: "Tissot PRX",
    images: [
      "images/tissot1.jpg",
      "images/tissot2.jpg",
      "images/tissot3.jpg",
      "images/tissot4.jpg"
    ]
  }
];

const watchGrid = document.getElementById("watchGrid");

watches.forEach((watch, index) => {
  const mainImgId = `main-${index}`;
  const card = document.createElement("div");
  card.className = "watch-card";

  card.innerHTML = `
    <img id="${mainImgId}" class="main-image" src="${watch.images[0]}" alt="${watch.name}">
    <div class="thumbs" id="thumbs-${index}"></div>
    <h4>${watch.name}</h4>
    <a class="whatsapp-btn" id="wa-${index}" target="_blank"
       href="https://wa.me/${phone}?text=مرحبًا، أرغب في شراء ساعة ${encodeURIComponent(watch.name)} (الصورة رقم 1)">
      اطلب الآن عبر واتساب
    </a>
  `;

  watchGrid.appendChild(card);

  const thumbsContainer = document.getElementById(`thumbs-${index}`);
  const waButton = card.querySelector(`#wa-${index}`);

  watch.images.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = `${watch.name} ${i + 1}`;
    thumb.addEventListener("click", () => {
      document.getElementById(mainImgId).src = img;
      waButton.href = `https://wa.me/${phone}?text=مرحبًا، أرغب في شراء ساعة ${encodeURIComponent(watch.name)} (الصورة رقم ${i + 1})`;
    });
    thumbsContainer.appendChild(thumb);
  });

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});
