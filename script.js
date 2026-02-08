/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("roseSection").classList.add("hidden");
  document.getElementById("photos").classList.add("hidden");
  document.getElementById("proposeSection").classList.add("hidden");
  document.getElementById("proposeFinal").classList.add("hidden");
});

/* ================= ROSE DAY ================= */
function showRose(btn) {
  btn.style.display = "none";
  document.getElementById("roseSection").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();
}

function showPhotos(btn) {
  btn.style.display = "none";
  const photos = document.getElementById("photos");
  photos.classList.remove("hidden");
  photos.style.display = "flex";
}

/* ================= PROPOSE DAY ================= */
function showProposal(btn) {
  btn.style.display = "none";
  document.getElementById("proposeSection").classList.remove("hidden");
}

function acceptProposal() {
  document.getElementById("proposeSection").classList.add("hidden");
  document.getElementById("proposeFinal").classList.remove("hidden");
}

/* ================= COUNTDOWN ================= */
const valentinesDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentinesDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days} days ${hrs} hrs ${mins} mins left ❤️`;
}, 1000);

/* ================= SWIPE ================= */
let currentSlide = 0;
const swipeTrack = document.getElementById("swipeTrack");
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 60 && currentSlide < 1) currentSlide++;
  if (diff < -60 && currentSlide > 0) currentSlide--;

  swipeTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;
});
