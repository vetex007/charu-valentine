function acceptProposal() {

  // 1️⃣ Hide the buttons
  document.querySelector(".propose-buttons").style.display = "none";

  // 2️⃣ Show final message + photo
  document.getElementById("final").classList.remove("hidden");

  // 3️⃣ Play music (NOW browser allows it)
  const music = document.getElementById("proposeMusic");
  if (music) {
    music.volume = 0.7;
    music.play();
  }

  // 4️⃣ Simple celebration hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}
/* ================= FALLING LOVE ================= */
setInterval(() => {
  const el = document.createElement("div");
  el.className = Math.random() > 0.5 ? "fall-heart" : "fall-ring";
  el.innerHTML = el.className === "fall-heart" ? "💖" : "💍";
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 6 + Math.random() * 4 + "s";
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 10000);
}, 700);


