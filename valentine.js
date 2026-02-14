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
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ================= POETIC MESSAGE ================= */
const message = `
You are my today,
and every tomorrow I dream of. ❤️<br><br>

You are my greatest strength,
and the gentlest place where I allow myself to be weak —
because only you hold the power
to make me the happiest soul alive,
or the quietest when you’re not near.<br><br>

You are my princess,
my queen in every lifetime,
my forever baby girl.<br><br>

You are not just my world…
you are the reason my heart knows
what home feels like —
now, always, and forever. 💫
`;

/* ================= YES CLICK ================= */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  /* Start music gently */
  music.volume = 0;
  music.play();
  fadeMusicIn();

  /* Start falling love */
  startLoveRain();

  /* Show message */
  setTimeout(showMessage, 700);
});

/* ================= MUSIC FADE IN ================= */
function fadeMusicIn() {
  let vol = 0;
  const fade = setInterval(() => {
    vol += 0.02;
    music.volume = vol;
    if (vol >= 0.6) clearInterval(fade);
  }, 200);
}

/* ================= SHOW MESSAGE ================= */
function showMessage() {
  messageBox.classList.remove("hidden");
  valText.innerHTML = message;

  valText.classList.remove("fade-in");
  void valText.offsetWidth;
  valText.classList.add("fade-in");

  /* Stay visible ~8 seconds */
  setTimeout(showPhotos, 8000);
}

/* ================= SHOW PHOTOS ================= */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  /* Prevent duplicate button */
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
  document.body.classList.add("final-moment");
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
    heart.style.animationDuration = 8 + Math.random() * 6 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 14000);
  }, 900);
}
