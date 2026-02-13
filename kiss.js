let kissStarted = false;
let msgIndex = 0;

const messages = [
  "A kiss isn’t just a touch…<br>it’s a feeling 💋",
  "If I could right now,<br>I’d pull you close,<br>look into your eyes…<br>and kiss you softly ❤️"
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

    // Show photo after final message
    if (msgIndex === messages.length - 1) {
      setTimeout(showPhoto, 1800);
      textEl.classList.add("final-kiss");
    }

    msgIndex++;
  }, 1000);
}

function showPhoto() {
  const photo = document.getElementById("kissPhoto");
  photo.src = "images/kiss.jpg";
  photo.classList.remove("hidden");
  photo.classList.add("fade-in");
}

/* Falling kisses */
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
