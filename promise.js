const promises = [
  { text: "I will always be yours.", photo: "images/1.jpg" },
  { text: "I will stay with you, no matter what.", photo: "images/2.jpg" },
  { text: "I promise to listen — even when words are hard.", photo: "images/3.jpg" },
  { text: "I promise to stand with you — not ahead of you, not behind you.", photo: "images/4.jpeg" },
  { text: "I will safeguard you from every obstacle life brings.", photo: "images/5.jpg" },
  { text: "I promise to choose you — on good days and bad.", photo: "images/6.jpg" },
  { text: "I will give you all the happiness I can — and share every smile with you.", photo: "images/7.jpeg" },
  {
    text: "Above everything else, I promise to love you honestly, deeply, and always.",
    photo: "images/8.jpeg",
    final: true
  }
];

let index = -1;
let musicStarted = false;
let loveStarted = false;

function nextPromise() {
  const textEl = document.getElementById("promiseText");
  const photoEl = document.getElementById("promisePhoto");
  const btn = document.getElementById("nextPromiseBtn");
  const music = document.getElementById("promiseMusic");

  /* ================= START MUSIC (ONCE) ================= */
  if (!musicStarted) {
    music.volume = 0.45;
    music.play();
    musicStarted = true;
  }

  /* ================= START LOVE FALL (ONCE) ================= */
  if (!loveStarted) {
    startLoveRain();
    loveStarted = true;
  }

  index++;

  if (index >= promises.length) {
    btn.style.display = "none";
    return;
  }

  /* ================= FADE OUT CURRENT ================= */
  textEl.classList.remove("final");
  textEl.classList.add("fade-out");
  if (photoEl) photoEl.classList.add("fade-out");

  setTimeout(() => {
    /* ================= UPDATE TEXT ================= */
    textEl.innerHTML = promises[index].text;
    textEl.classList.remove("fade-out");
    textEl.classList.add("fade-in");

    /* ================= UPDATE PHOTO ================= */
    if (promises[index].photo) {
      photoEl.src = promises[index].photo;
      photoEl.classList.remove("hidden");
      photoEl.classList.remove("fade-out");
      photoEl.classList.add("fade-in");
    } else {
      photoEl.classList.add("hidden");
    }

    /* ================= FINAL PROMISE ================= */
    if (promises[index].final) {
      textEl.classList.add("final");     // special glow handled by CSS
      btn.style.display = "none";        // no more clicks
    }

  }, 800); // smooth transition timing
}
function startLoveRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "fall-love";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.transform = `translateX(${Math.random() * 40 - 20}px)`;
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
  }, 900); // smooth, romantic pace
}
