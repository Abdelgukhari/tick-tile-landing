// ✅ رقم الواتساب
const phone = "201029699335";

// ✅ بيانات الساعات (مجمعة محليًا)
const watches = [
  {
    name: "Metal Carier Skeleton",
    price: "٦٩٩ جنيه",
    images: Array.from({ length: 4 }, (_, i) => `images/skeleton${i + 1}.jpg`)
  },
  {
    name: "Casio Metal",
    price: "٦٥٠ جنيه",
    images: Array.from({ length: 13 }, (_, i) => `images/casio${i + 1}.jpg`)
  },
  {
    name: "Tissot PRX",
    price: "٥٥٠ جنيه",
    images: Array.from({ length: 4 }, (_, i) => `images/tissot${i + 1}.jpg`)
  },
  {
    name: "Metal Patek Philippe",
    price: "٤٩٩ جنيه",
    images: Array.from({ length: 3 }, (_, i) => `images/metal_patek${i + 1}.jpg`)
  },
  {
    name: "Leather Patek Philippe",
    price: "٧٠٠ جنيه",
    images: Array.from({ length: 5 }, (_, i) => `images/leather_patek${i + 1}.jpg`)
  },
  {
    name: "Audemars Piguet Royal Oak",
    price: "٤٥٠ جنيه",
    images: Array.from({ length: 3 }, (_, i) => `images/royal_oak${i + 1}.jpg`)
  },
  {
    name: "Women's Original Watch",
    price: "٩٥٠ جنيه",
    images: Array.from({ length: 3 }, (_, i) => `images/women${i + 1}.jpg`)
  },
  {
    name: "Cartier Santos Matte",
    price: "٧٩٩ جنيه",
    images: Array.from({ length: 4 }, (_, i) => `images/cartier${i + 1}.jpg`)
  },
  {
    name: "Zara Metal (Original)",
    price: "٩٥٠ جنيه",
    images: Array.from({ length: 9 }, (_, i) => `images/zara${i + 1}.jpg`)
  },
  {
    name: "Forecast Women Original",
    price: "٥٥٠ جنيه",
    images: Array.from({ length: 2 }, (_, i) => `images/forecast${i + 1}.jpg`)
  }
];

// ✅ توليد البطاقات
const watchGrid = document.getElementById("watchGrid");

watches.forEach((watch, index) => {
  const mainImgId = `main-${index}`;
  const card = document.createElement("div");
  card.className = "watch-card";

  card.innerHTML = `
    <img id="${mainImgId}" class="main-image" src="${watch.images[0]}" alt="${watch.name}">
    <div class="thumbs" id="thumbs-${index}"></div>
    <h4>${watch.name}</h4>
    <div class="watch-price">السعر: <strong>${watch.price}</strong></div>
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
});

// ✅ كاونت داون (Countdown Timer)
const countdownEl = document.getElementById("countdown");
const deadline = new Date();
deadline.setDate(deadline.getDate() + 3); // ينتهي العرض بعد 3 أيام

function updateCountdown() {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance <= 0) {
    countdownEl.textContent = "انتهى العرض";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `${days} يوم : ${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
