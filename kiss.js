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
  const btn = document.getElementById("kissBtn");
  const music = document.getElementById("kissMusic");

  btn.style.display = "none";

  if (!kissStarted) {
    music.volume = 0.4;
    music.play();
    startKissRain();
    kissStarted = true;
  }

  showMessage(); // start sequence
}

/* ================= MESSAGE SEQUENCE ================= */
function showMessage() {
  const textEl = document.getElementById("kissText");

  if (msgIndex >= messages.length) {
    showPhoto();
    return;
  }

  textEl.style.opacity = 0;

  setTimeout(() => {
    textEl.innerHTML = messages[msgIndex];
    textEl.style.opacity = 1;

    // final message glow
    if (msgIndex === messages.length - 1) {
      textEl.classList.add("final-kiss");
      setTimeout(showPhoto, 2200);
    } else {
      setTimeout(showMessage, 2800); // move to next message
    }

    msgIndex++;
  }, 1000);
}

/* ================= PHOTO REVEAL ================= */
function showPhoto() {
  const photo = document.getElementById("kissPhoto");
  photo.src = "images/kiss.jpg"; // make sure this exists
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
  }, 1000);
}
