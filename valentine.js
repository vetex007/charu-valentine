const noBtn = document.getElementById("noBtn");
const music = document.getElementById("valMusic");

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* YES CLICK */
function acceptValentine() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("valMessages").classList.remove("hidden");

  music.volume = 0.5;
  music.play();

  startLoveRain();
  showMessages();
}

/* Messages */
const lines = [
  "From the first smile…",
  "to every laugh we share…",
  "you became my favorite place ❤️",
  "Today isn’t just Valentine’s…",
  "it’s us 💖"
];

let i = 0;
function showMessages() {
  const text = document.getElementById("valText");
  text.innerHTML = lines[i];

  i++;
  if (i < lines.length) {
    setTimeout(showMessages, 3200);
  } else {
    setTimeout(() => {
      document.getElementById("valMessages").classList.add("hidden");
      document.getElementById("valPhotos").classList.remove("hidden");
    }, 10000);
  }
}

/* Final */
function finalThanks() {
  document.getElementById("valPhotos").classList.add("hidden");
  document.getElementById("finalThanks").classList.remove("hidden");
}

/* Falling Love */
function startLoveRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.innerHTML = "❤️";
    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.top = "-40px";
    h.style.fontSize = "18px";
    h.style.animation = "fall 8s linear";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }, 700);
}
