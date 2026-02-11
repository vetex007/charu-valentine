let holdTimer;
let hugged = false;

const hugIcon = document.getElementById("hugIcon");
const hugFinal = document.getElementById("hugFinal");
const hugHint = document.getElementById("hugHint");
const hugMusic = document.getElementById("hugMusic");

/* PREVENT LONG PRESS MENU */
["contextmenu", "selectstart"].forEach(evt =>
  hugIcon.addEventListener(evt, e => e.preventDefault())
);

/* EVENTS */
hugIcon.addEventListener("mousedown", startHold);
hugIcon.addEventListener("touchstart", startHold);

hugIcon.addEventListener("mouseup", cancelHold);
hugIcon.addEventListener("mouseleave", cancelHold);
hugIcon.addEventListener("touchend", cancelHold);

function startHold(e) {
  e.preventDefault();
  if (hugged) return;

  hugIcon.classList.add("hugging");
  hugHint.innerText = "Holding… 🤍";

  hugMusic.volume = 0.4;
  hugMusic.play();

  holdTimer = setTimeout(() => {
    hugged = true;
    completeHug();
  }, 3000); // 3 seconds
}

function cancelHold() {
  if (!hugged) {
    clearTimeout(holdTimer);
    hugIcon.classList.remove("hugging");
    hugHint.innerText = "Press & hold this hug 🤍";
    hugMusic.pause();
  }
}

function completeHug() {
  hugHint.style.display = "none";
  hugIcon.style.opacity = "0.3";

  hugFinal.classList.remove("hidden");
  startSoftHearts();
}

/* SOFT FALLING HEARTS */
function startSoftHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "hug-heart";
    heart.innerHTML = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (7 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
  }, 1300);
}
