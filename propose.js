function acceptProposal() {

  // 1️⃣ Hide the question section
  const question = document.getElementById("proposalQuestion");
  if (question) question.style.display = "none";

  // 2️⃣ Show final message + photo
  const final = document.getElementById("final");
  if (final) final.classList.remove("hidden");

  // 3️⃣ Start music AFTER click (browser-safe)
  const music = document.getElementById("proposeMusic");
  if (music) {
    music.volume = 0.7;
    music.play();
  }

  // 4️⃣ Celebration hearts burst
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1300);
  }
}

/* ================= CONTINUOUS FALLING HEARTS & RINGS ================= */
setInterval(() => {
  const el = document.createElement("div");
  el.className = Math.random() > 0.5 ? "fall-heart" : "fall-ring";
  el.innerHTML = el.className === "fall-heart" ? "💖" : "💍";
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 10000);
}, 800);
