const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const valText = document.getElementById("valText");
const photoBox = document.getElementById("photoBox");
const finalBox = document.getElementById("finalBox");

const music = document.getElementById("valMusic");

/* ================= NO BUTTON ESCAPE ================= */
function moveNo() {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ================= MUSIC (START AFTER YES) ================= */
function startMusicAfterYes() {
  music.volume = 0;          // start silent
  music.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      vol += 0.04;
      music.volume = Math.min(vol, 0.6);
      if (vol >= 0.6) clearInterval(fade);
    }, 200);
  }).catch(err => {
    console.log("Music blocked:", err);
  });
}

/* ================= MESSAGES ================= */
const messages = [
  "You are my today ❤️",
  "You are my tomorrow 🌙",
  "You are my biggest strength 💪",
  "And my sweetest weakness 🥹",
  "You are my world, my forever 💖"
];

let msgIndex = 0;

/* ================= YES CLICK ================= */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  // ✅ MUSIC STARTS HERE (USER INTERACTION)
  startMusicAfterYes();

  startLoveRain();

  setTimeout(() => {
    messageBox.classList.remove("hidden");
    showNextMessage();
  }, 800);
});

/* ================= MESSAGE SEQUENCE ================= */
function showNextMessage() {
  if (msgIndex >= messages.length) {
    setTimeout(showPhotos, 1200);
    return;
  }

  valText.classList.remove("fade-in");
  void valText.offsetWidth; // reflow

  valText.textContent = messages[msgIndex];
  valText.classList.add("fade-in");

  msgIndex++;
  setTimeout(showNextMessage, 2600);
}

/* ================= PHOTOS ================= */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  setTimeout(showFinalButton, 12000); // photos stay 12 sec
}

/* ================= FINAL BUTTON ================= */
function showFinalButton() {
  const btn = document.createElement("button");
  btn.className = "final-btn";
  btn.textContent = "Be mine forever ❤️";

  btn.addEventListener("click", showFinalMoment);
  photoBox.appendChild(btn);
}

/* ================= FINAL HEART ================= */
function showFinalMoment() {
  photoBox.classList.add("hidden");
  finalBox.classList.remove("hidden");
  document.body.classList.add("final-moment");
}

/* ================= FALLING LOVE ================= */
function startLoveRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "fall-love";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 8 + Math.random() * 4 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 14000);
  }, 900);
}
