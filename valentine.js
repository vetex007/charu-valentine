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
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ================= MUSIC FADE ================= */
function fadeInMusic() {
  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.03;
    if (vol >= 0.5) {
      music.volume = 0.5;
      clearInterval(fade);
    } else {
      music.volume = vol;
    }
  }, 200);
}

/* ================= MESSAGES ================= */
const messages = [
  "You are my today ❤️",
  "You are my tomorrow 🌙",
  "You are my biggest strength 💪",
  "And my sweetest weakness 🥹",
  "You hold the power to make me the happiest soul alive ✨",
  "My princess, my queen, my forever 💖"
];

let msgIndex = 0;

/* ================= YES CLICK ================= */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  fadeInMusic();
  startLoveRain();

  setTimeout(() => {
    messageBox.classList.remove("hidden");
    showNextMessage();
  }, 1000);
});

/* ================= MESSAGE FLOW ================= */
function showNextMessage() {
  if (msgIndex >= messages.length) {
    setTimeout(showPhotos, 1400);
    return;
  }

  valText.classList.remove("fade-in");
  void valText.offsetWidth;

  valText.textContent = messages[msgIndex];
  valText.classList.add("fade-in");

  msgIndex++;
  setTimeout(showNextMessage, 2600);
}

/* ================= PHOTOS ================= */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  setTimeout(showFinal, 15000);
}

/* ================= FINAL MOMENT ================= */
function showFinal() {
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
    heart.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
  }, 700);
}
