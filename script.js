// Floating Roses
for (let i = 0; i < 20; i++) {
  let rose = document.createElement("div");
  rose.className = "rose-float";
  rose.innerHTML = "🌹";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 10 + Math.random() * 10 + "s";
  document.body.appendChild(rose);
}

// Sparkles
for (let i = 0; i < 30; i++) {
  let sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(sparkle);
}

// Click Actions
function showRose(btn) {
  btn.style.display = "none";
  document.getElementById("roseSection").style.display = "block";
}

function showPhotos(btn) {
  btn.style.display = "none";
  document.getElementById("photos").style.display = "block";
}
// Cursor Heart Trail
document.addEventListener("mousemove", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
});
function playMusic() {
  document.getElementById("bgMusic").play();
}


const valentinesDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = valentinesDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days} days ${hours} hrs ${mins} mins left for Valentine’s Day ❤️`;
}, 1000);

function showRose(btn) {
  btn.style.display = "none";

  document.getElementById("roseSection").style.display = "block";

  // Start music after user interaction (browser-safe)
  const music = document.getElementById("bgMusic");
  music.volume = 0.6;
  music.play();
}
