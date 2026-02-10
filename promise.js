const promises = [
  {
    text: "I will always be yours.",
    photo: "images/her.jpg"
  },
  {
    text: "I will stay with you, no matter what.",
    photo: "images/us.jpg"
  },
  {
    text: "I promise to listen — even when words are hard.",
    photo: "images/us2.jpg"
  },
  {
    text: "I promise to stand with you — not ahead of you, not behind you.",
    photo: null
  },
  {
    text: "I will safeguard you from every obstacle life brings.",
    photo: null
  },
  {
    text: "I promise to choose you — on good days and bad.",
    photo: "images/us3.jpg"
  },
  {
    text: "I will give you all the happiness I can — and share every smile with you.",
    photo: null
  },
  {
    text: "Above everything else, I promise to love you honestly, deeply, and always.",
    photo: "images/us3.jpg",
    final: true
  }
];

let index = -1;
let musicStarted = false;

function nextPromise() {
  const textEl = document.getElementById("promiseText");
  const photoEl = document.getElementById("promisePhoto");
  const btn = document.getElementById("nextPromiseBtn");
  const music = document.getElementById("promiseMusic");

  // start music on first interaction
  if (!musicStarted) {
    music.volume = 0.45;
    music.play();
    musicStarted = true;
  }

  index++;

  if (index >= promises.length) {
    btn.style.display = "none";
    return;
  }

  // fade out
  textEl.classList.add("fade-out");
  photoEl.classList.add("fade-out");

  setTimeout(() => {
    // update text
    textEl.innerHTML = promises[index].text;
    textEl.classList.remove("fade-out");
    textEl.classList.add("fade-in");

    // update photo
    if (promises[index].photo) {
      photoEl.src = promises[index].photo;
      photoEl.classList.remove("hidden");
      photoEl.classList.remove("fade-out");
      photoEl.classList.add("fade-in");
    } else {
      photoEl.classList.add("hidden");
    }

    // final promise stays longer
    if (promises[index].final) {
      btn.style.display = "none";
    }

  }, 800);
}
