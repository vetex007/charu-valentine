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
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
noBtn.addEventListener("click", moveNo);
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Messages */
const messages = [
  `You are my today,
and every tomorrow I dream of. ❤️<br><br>

You are my greatest strength,
and the gentlest place where I allow myself to be weak 
because only you hold the power
to make me the happiest soul alive,
or the quietest when you’re not near.<br><br>

You are my princess,
my queen in every lifetime,
my forever baby girl.<br><br>

You are not just my world…
you are the reason my heart knows
what home feels like —
now, always, and forever. 💫`
];


let index = 0;

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  questionBox.classList.add("hidden");

  music.volume = 0;
  music.play();
  fadeMusicIn();

  startLoveRain();

  setTimeout(() => {
    messageBox.classList.remove("hidden");
    showMessage();
  }, 800);
});

/* Music fade in */
function fadeMusicIn() {
  let v = 0;
  const i = setInterval(() => {
    v += 0.02;
    music.volume = v;
    if (v >= 0.6) clearInterval(i);
  }, 200);
}

/* Show messages */
function showMessage() {
  if (index >= messages.length) {
    showPhotos();
    return;
  }

  valText.textContent = messages[index];
  valText.classList.remove("fade-in");
  void valText.offsetWidth;
  valText.classList.add("fade-in");

  index++;
  setTimeout(showMessage, 5500);
}

/* Photos stay until button */
function showPhotos() {
  messageBox.classList.add("hidden");
  photoBox.classList.remove("hidden");

  const btn = document.createElement("button");
  btn.textContent = "Be mine ❤️";
  btn.className = "final-btn";
  btn.onclick = showFinal;

  photoBox.appendChild(btn);
}

/* Final */
function showFinal() {
  document.body.classList.add("final-moment");
  photoBox.classList.add("hidden");
  finalBox.classList.remove("hidden");
}

/* Falling hearts */
function startLoveRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "fall-love";
    h.innerHTML = Math.random() > 0.5 ? "❤️" : "🌹";
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = 8 + Math.random() * 6 + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 14000);
  }, 900);
}
