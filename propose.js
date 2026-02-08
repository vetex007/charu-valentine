function acceptProposal() {
  // Hide buttons
  document.querySelector(".propose-buttons").style.display = "none";

  // Show celebration
  document.getElementById("celebration").classList.remove("hidden");
https://github.com/vetex007/charu-valentine
  // Simple celebration hearts
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1200);
  }
}
