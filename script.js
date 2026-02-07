/* =====================================================
   FORCE INITIAL STATE (VERY IMPORTANT)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const roseSection = document.getElementById("roseSection");
  const photos = document.getElementById("photos");

  if (roseSection) roseSection.classList.add("hidden");
  if (photos) photos.classList.add("hidden");
});

/* =====================================================
   FLOATING ROSES
===================================================== */
for (let i = 0; i < 20; i++) {
  const rose = document.createElement("div");
  rose.className = "rose-float";
  rose.innerHTML = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(rose);
}

/* =====================================================
   SPARKLES
===================================================== */
for (let i = 0; i < 30; i++) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(sparkle);
}

/* =====================================================
   FIRST CLICK → SHOW ROSE + MUSIC
===================================================== */
function showRose(btn) {
  btn.style.display = "none";

  const roseSection = document.getElementById("roseSection");
  roseSection.classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.6;
    music.play();
  }
}

/* =====================================================
   SECOND CLICK → SHOW PHOTOS
===================================================== */
function showPhotos(btn) {
  btn.style.display = "none";

  const photos = document.getElementById("photos");
  photos.classList.remove("hidden");
  photos.style.display = "flex";

  heartBurst();
}

/* =====================================================
   HEART BURST
===================================================== */
function heartBurst() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = 50 + (Math.random() * 20 - 10) + "vw";
    heart.style.top = "60vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
  }
}

/* =====================================================
   CURSOR HEART TRAIL
===================================================== */
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});

/* =====================================================
   COUNTDOWN
===================================================== */
const valentinesDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentinesDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  const countdown = document.getElementById("countdown");
  if (countdown) {
    countdown.innerHTML =
      `⏳ ${days} days ${hours} hrs ${mins} mins left for Valentine’s Day ❤️`;
  }
}, 1000);

