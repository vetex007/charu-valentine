let kissStarted = false;
let msgIndex = 0;

const messages = [
  "Your kiss feels like sweetness itself…<br>\
like honey melting slowly on my lips 💋",

  "It flows so gently, so beautifully,<br>\
that I become like a bee —<br>\
drawn to it, tasting every moment… 🐝❤️",

  "And even after taking it all in,<br>\
I still want more of it…<br>\
more of you 💋"
];

function startKiss() {
  const text = document.getElementById("kissText");
  const btn = document.getElementById("kissBtn");
  const music = document.getElementById("kissMusic");

  btn.style.display = "none";

  if (!kissStarted) {
    music.volume = 0.4;
    music.play();
    startKissRain();
    kissStarted = true;
  }

  showNextMessage(text);
}

function showNextMessage(textEl) {
  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.innerHTML = messages[msgIndex];
    textEl.style.opacity = 1;

    // Final message → glow + photo
    if (msgIndex === messages.length - 1) {
      textEl.classList.add("final-kiss");
      setTimeout(showPhoto, 1800);
    }

    msgIndex++;
  }, 1000);
}

function showPhoto() {
  const photo = document.getElementById("kissPhoto");
  photo.src = "images/kiss.jpg";   // ✅ make sure this file exists
  photo.classList.remove("hidden");
  photo.classList.add("fade-in", "kiss-blink");
}

/* ================= FALLING KISSES ================= */

function startKissRain() {
  setInterval(() => {
    const kiss = document.createElement("div");
    kiss.className = "kiss-fall";
    kiss.innerHTML = "💋";
    kiss.style.left = Math.random() * 100 + "vw";
    kiss.style.animationDuration = (7 + Math.random() * 4) + "s";
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 12000);
  }, 1200);
}
