// ✅ رقم الواتساب
const phone = "201029699335";

// ✅ بيانات الساعات (مجمعة محليًا)
const watches = [
  {
    name: "Metal Carier Skeleton",
    images: Array.from({ length: 4 }, (_, i) => `images/skeleton${i + 1}.jpg`)
  },
  {
    name: "Casio Metal",
    images: Array.from({ length: 13 }, (_, i) => `images/casio${i + 1}.jpg`)
  },
  {
    name: "Tissot PRX",
    images: Array.from({ length: 4 }, (_, i) => `images/tissot${i + 1}.jpg`)
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
