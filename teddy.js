let holdTimer;
let hugged = false;

const teddy = document.getElementById("teddy");
const music = document.getElementById("teddyMusic");

teddy.addEventListener("mousedown", startHold);
teddy.addEventListener("touchstart", startHold);

teddy.addEventListener("mouseup", cancelHold);
teddy.addEventListener("mouseleave", cancelHold);
teddy.addEventListener("touchend", cancelHold);

function startHold() {
  if (hugged) return;

  // start music gently
  music.volume = 0.4;
  music.play();

  // warm background
  document.body.style.background =
    "radial-gradient(circle, #ffd1dc, #ff9a9e)";

  holdTimer = setTimeout(() => {
    hugged = true;
    revealLove();
  }, 3000); // 3 seconds hold
}

function cancelHold() {
  if (!hugged) {
    clearTimeout(holdTimer);
    music.pause();
  }
}

function revealLove() {
  document.getElementById("teddyHint").style.display = "none";
  document.getElementById("teddyFinal").classList.remove("hidden");

  // teddy pulse
  teddy.style.transform = "scale(1.1)";
}
