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
