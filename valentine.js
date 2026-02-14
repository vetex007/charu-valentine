/* ================= ELEMENTS ================= */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const valText = document.getElementById("valText");

const photoBox = document.getElementById("photoBox");
const finalBox = document.getElementById("finalBox");
const finalText = document.getElementById("finalText");

const music = document.getElementById("valMusic");

/* ================= NO BUTTON ESCAPE ================= */

function moveNo() {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

["click", "mouseover", "touchstart"].forEach(evt =>
  noBtn.addEventListener(evt, moveNo)
);

/* ================= MESSAGE LINES ================= */

const messageLines = [
  "You are my today,",
  "and every tomorrow I dream of. ❤️",

  "You are my greatest strength,",
  "and the gentlest place where I allow myself to be weak.",

  "You are my princess,",
  "my queen in every lifetime,",
  "my forever baby girl.",

  " You are not just my world…",
"you are the reason my heart knows what home feels like,",
"now, always, and forever. 💫"
];

let msgIndex = 0;

/* ================= YES CLICK ================= */

yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  // Start music softly
  music.volume = 0;
  music.play();
  fadeMusicIn();

  startLoveRain();

  // Start message sequence
  setTimeout(() => {
    messageBox.classList.remove("hidden");
    showNextLine();
  }, 900);
});

/* ================= MUSIC FADE IN ================= */

function fadeMusicIn() {
  let v = 0;
  const fade = setInterval(() => {
    v += 0.02;
    music.volume = v;
    if (v >= 0.6) clearInterval(fade);
  }, 200);
}

/* ================= SHOW MESSAGE LINE BY LINE ================= */

function showNextLine() {
  if (msgIndex >= messageLines.length) {
    setTimeout(showPhotos, 1200);
    return;
  }

  valText.innerHTML = messageLines[msgIndex];
  valText.classList.remove("fade-in");
  void valText.offsetWidth; // force reflow
  valText.classList.add("fade-in");

  msgIndex++;
  setTimeout(showNextLine, 5200); // 5–6 sec per line
}

/* ================= SHOW PHOTOS ================= */

function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  // Create button only once
  if (!document.getElementById("finalBtn")) {
    const btn = document.createElement("button");
    btn.id = "finalBtn";
    btn.className = "final-btn";
    btn.textContent = "Be mine ❤️";
    btn.onclick = showFinal;
    photoBox.appendChild(btn);
  }
}

/* ================= FINAL MOMENT ================= */

function showFinal() {
  photoBox.classList.add("hidden");

  // Dim background + final state
  document.body.classList.add("final-moment");

  finalBox.classList.remove("hidden");

  // ONE LINE ONLY
  finalText.innerHTML = "Be mine forever ❤️";
}

/* ================= FALLING HEARTS ================= */

function startLoveRain() {
  setInterval(() => {
    const el = document.createElement("div");
    el.className = "fall-love";
    el.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = 10 + Math.random() * 6 + "s";
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 16000);
  }, 900);
}
