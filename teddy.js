let holdTimer;
let hugged = false;
let rainStarted = false;

const teddy = document.getElementById("teddy");
const music = document.getElementById("teddyMusic");

/* ================= BLOCK LONG PRESS / COPY ================= */
["contextmenu", "selectstart", "dragstart"].forEach(evt => {
  document.addEventListener(evt, e => e.preventDefault());
});

/* ================= EVENT LISTENERS ================= */
teddy.addEventListener("mousedown", startHold);
teddy.addEventListener("touchstart", startHold, { passive: false });

teddy.addEventListener("mouseup", cancelHold);
teddy.addEventListener("mouseleave", cancelHold);
teddy.addEventListener("touchend", cancelHold);

/* ================= HOLD START ================= */
function startHold(e) {
  e.preventDefault();
  if (hugged) return;

  // Visual feedback immediately
  teddy.classList.add("hugging");

  // Warm background
  document.body.style.background =
    "radial-gradient(circle, #ffd1dc, #ff9a9e)";

  // Start music gently
  if (music) {
    music.volume = 0.4;
    music.play();
  }

  // Start hug timer
  holdTimer = setTimeout(() => {
    hugged = true;
    revealLove();
  }, 3000); // 3-second hug
}

/* ================= HOLD CANCEL ================= */
function cancelHold() {
  if (!hugged) {
    clearTimeout(holdTimer);

    teddy.classList.remove("hugging");

    if (music) music.pause();
  }
}

/* ================= FINAL REVEAL ================= */
function revealLove() {
  // Stop pulse, keep teddy slightly big
  teddy.classList.remove("hugging");
  teddy.style.transform = "scale(1.1)";

  // Hide hint text
  const hint = document.getElementById("teddyHint");
  if (hint) hint.style.display = "none";

  // Show first message + photo
  const final = document.getElementById("teddyFinal");
  if (final) final.classList.remove("hidden");

  // Start teddy rain only once
  if (!rainStarted) {
    startTeddyRain();
    rainStarted = true;
  }

  // SECOND reveal after a pause (emotional timing)
  setTimeout(() => {
    const second = document.getElementById("teddySecond");
    if (second) second.classList.remove("hidden");
  }, 4000); // 2.5 seconds feels perfect
}


/* ================= FALLING TEDDIES 🧸 ================= */
function startTeddyRain() {
  setInterval(() => {
    const drop = document.createElement("div");
    drop.className = "fall-teddy";
    drop.innerHTML = "🧸";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 7 + Math.random() * 4 + "s";
    document.body.appendChild(drop);

    setTimeout(() => drop.remove(), 12000);
  }, 1200); // slow, cozy rain
}
