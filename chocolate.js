/* ================= CHOCOLATE DAY MESSAGE ================= */

const messageLines = [
  "Just like chocolate… 🍫",
  "you make everything sweeter.",
  "Even the ordinary days feel special with you.",
  "",
  "So here’s something sweet —",
  "not just chocolate,",
  "but my heart with it ❤️"
];

let chocoRainStarted = false;

function openChocolate() {
  // 1️⃣ Hide wrapper
  const wrapper = document.getElementById("chocoWrapper");
  if (wrapper) wrapper.style.display = "none";

  // 2️⃣ Show chocolate section
  const reveal = document.getElementById("chocoReveal");
  if (reveal) reveal.classList.remove("hidden");

  // 3️⃣ Play music AFTER click (browser-safe)
  const music = document.getElementById("chocoMusic");
  if (music) {
    music.volume = 0.6;
    music.play();
  }

  // 4️⃣ Start chocolate rain only once
  if (!chocoRainStarted) {
    startChocolateRain();
    chocoRainStarted = true;
  }

  // 5️⃣ Start typing effect
  typeMessage();
}

/* ================= TYPING EFFECT ================= */

function typeMessage() {
  const textEl = document.getElementById("chocoText");
  if (!textEl) return;

  textEl.innerHTML = ""; // safety reset

  let line = 0;
  let char = 0;

  function type() {
    if (line < messageLines.length) {
      if (char < messageLines[line].length) {
        textEl.innerHTML += messageLines[line][char];
        char++;
        setTimeout(type, 40);
      } else {
        textEl.innerHTML += "<br>";
        line++;
        char = 0;
        setTimeout(type, 400);
      }
    } else {
      // 6️⃣ Show photo at the end
      const photo = document.getElementById("chocoPhoto");
      if (photo) photo.classList.remove("hidden");
    }
  }

  type();
}

/* ================= CHOCOLATE RAIN 🍫 ================= */

function startChocolateRain() {
  setInterval(() => {
    const choco = document.createElement("div");
    choco.className = "fall-choco";
    choco.innerHTML = "🍫";
    choco.style.left = Math.random() * 100 + "vw";
    choco.style.animationDuration = 6 + Math.random() * 4 + "s";
    document.body.appendChild(choco);

    setTimeout(() => choco.remove(), 10000);
  }, 900); // slower = more elegant
}
