document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("roseSection").classList.add("hidden");
  document.getElementById("photos").classList.add("hidden");
});

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

/* Countdown */
const valentinesDate = new Date("Feb 14, 2026 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = valentinesDate - now;
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  document.getElementById("countdown").innerHTML =
    `⏳ ${d} days ${h} hrs ${m} mins left ❤️`;
}, 1000);
