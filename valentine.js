const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const questionBox = document.getElementById("questionBox");
const messageBox = document.getElementById("messageBox");
const valText = document.getElementById("valText");
const photoBox = document.getElementById("photoBox");
const finalBox = document.getElementById("finalBox");
const finalText = document.getElementById("finalText");

const music = document.getElementById("valMusic");

/* NO button escape */
function moveNo() {
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
["click","mouseover","touchstart"].forEach(e =>
  noBtn.addEventListener(e, moveNo)
);

/* MAIN MESSAGE */
const message =
`You are my today,
and every tomorrow I dream of.

You are my greatest strength,
and the gentlest place where I allow myself to be weak.

You are my princess,
my queen in every lifetime,
my forever baby girl.`;

/* FINAL LINES */
const finalLines = [
  "You are not just my world…",
  "you are the reason my heart knows",
  "what home feels like.",
  "Now, always, and forever. 💫"
];

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  music.volume = 0;
  music.play();
  fadeMusicIn();
  startLoveRain();

  setTimeout(() => {
    messageBox.classList.remove("hidden");
    valText.innerHTML = message.replace(/\n/g,"<br>");
  }, 900);

  setTimeout(showPhotos, 6500);
});

/* MUSIC FADE */
function fadeMusicIn() {
  let v = 0;
  const i = setInterval(() => {
    v += 0.02;
    music.volume = v;
    if (v >= 0.6) clearInterval(i);
  }, 200);
}

/* PHOTOS */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  const btn = document.createElement("button");
  btn.className = "final-btn";
  btn.textContent = "Be mine ❤️";
  btn.onclick = showFinal;
  photoBox.appendChild(btn);
}

/* FINAL */
function showFinal() {
  photoBox.classList.add("hidden");
  document.body.classList.add("final-moment");
  finalBox.classList.remove("hidden");

  let i = 0;
  finalText.innerHTML = "";

  const interval = setInterval(() => {
    if (i >= finalLines.length) {
      clearInterval(interval);
      return;
    }
    finalText.innerHTML += finalLines[i] + "<br>";
    i++;
  }, 1200);
}

/* Falling love */
function startLoveRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "fall-love";
    h.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 10 + Math.random() * 6 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 16000);
  }, 900);
}
