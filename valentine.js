const messages = [
  "You are my today,<br>and every tomorrow I dream of.",
  "You are my greatest strength,<br>and my softest weakness.",
  "You hold the power to make me<br>the happiest soul alive.",
  "You are my princess,<br>my queen, my forever baby girl.",
  "You are not just my world…<br>you are my home ❤️"
];

let msgIndex = 0;

const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random()*120-60}px, ${Math.random()*80-40}px)`;
});

function acceptValentine() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("messageBox").classList.remove("hidden");

  const music = document.getElementById("valMusic");
  music.volume = 0.45;
  music.play();

  startLoveRain();
  showMessage();
}

function showMessage() {
  const text = document.getElementById("valText");

  if (msgIndex < messages.length) {
    text.innerHTML = messages[msgIndex];
    msgIndex++;
    setTimeout(showMessage, 3500);
  } else {
    setTimeout(() => {
      document.getElementById("messageBox").classList.add("hidden");
      document.getElementById("photoBox").classList.remove("hidden");
    }, 6000);
  }
}

function startLoveRain() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "fall-love";
    h.innerHTML = "❤️";
    h.style.left = Math.random()*100 + "vw";
    h.style.animationDuration = (6 + Math.random()*4) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  }, 800);
}
