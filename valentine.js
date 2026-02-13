/* =====================================================
   VALENTINE DAY JS
===================================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const valText = document.getElementById("valText");
const photoBox = document.getElementById("photoBox");
const finalBox = document.getElementById("finalBox");

/* ================= NO BUTTON ESCAPE ================= */

noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
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
  void valText.offsetWidth; // force reflow

  valText.textContent = messages[msgIndex];
  valText.classList.add("fade-in");

  msgIndex++;

  setTimeout(showNextMessage, 2400);
}

/* ================= PHOTO ORBIT ================= */

function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  setTimeout(showFinal, 12000); // photos stay 12 sec
}

/* ================= FINAL ================= */

function showFinal() {
  photoBox.classList.add("hidden");
  finalBox.classList.remove("hidden");
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
