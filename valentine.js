const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const valText = document.getElementById("valText");
const photoBox = document.getElementById("photoBox");
const finalBox = document.getElementById("finalBox");

const music = document.getElementById("valMusic");

/* NO BUTTON ESCAPE */
function moveNo() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* MESSAGE SEQUENCE */
const messages = [
  "You are my today ❤️",
  "You are my tomorrow 🌙",
  "You are my biggest strength 💪",
  "And my sweetest weakness 🥹",
  "You hold the power to make me the happiest soul alive ✨",
  "My princess, my queen, my forever 💖"
];

let index = 0;

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  // Start music gently
  music.volume = 0;
  music.play();
  fadeMusicIn();

  startLoveRain();

  setTimeout(() => {
    messageBox.classList.remove("hidden");
    showMessage();
  }, 800);
});

/* MUSIC FADE IN */
function fadeMusicIn() {
  let vol = 0;
  const interval = setInterval(() => {
    vol += 0.02;
    if (vol >= 0.6) {
      music.volume = 0.6;
      clearInterval(interval);
    } else {
      music.volume = vol;
    }
  }, 200);
}

/* SHOW MESSAGES ONE BY ONE */
function showMessage() {
  if (index >= messages.length) {
    setTimeout(showPhotos, 1200);
    return;
  }

  valText.textContent = messages[index];
  valText.classList.add("fade-in");

  index++;
  setTimeout(showMessage, 5500); // 5.5 sec per message
}

/* SHOW PHOTOS */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  setTimeout(showFinal, 12000);
}

/* FINAL */
function showFinal() {
  photoBox.classList.add("hidden");
  finalBox.classList.remove("hidden");
}

/* FALLING LOVE */
function startLoveRain() {
  setInterval(() => {
    const el = document.createElement("div");
    el.className = "fall-love";
    el.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 12000);
  }, 700);
}
