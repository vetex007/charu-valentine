const messageLines = [
  "Just like chocolate… 🍫",
  "you make everything sweeter.",
  "Even the ordinary days feel special with you.",
  "",
  "So here’s something sweet —",
  "not just chocolate,",
  "but my heart with it ❤️"
];

function openChocolate() {
  // hide wrapper
  document.getElementById("chocoWrapper").style.display = "none";

  // show chocolate
  document.getElementById("chocoReveal").classList.remove("hidden");

  // play music after interaction
  const music = document.getElementById("chocoMusic");
  music.volume = 0.6;
  music.play();

  typeMessage();
}

function typeMessage() {
  const textEl = document.getElementById("chocoText");
  let line = 0;
  let char = 0;

  function type() {
    if (line < messageLines.length) {
      if (char < messageLines[line].length) {
        textEl.innerHTML += messageLines[line][char];
        char++;
        setTimeout(type, 40);
      } else {
        textEl.innerHTML += "<br>";
        line++;
        char = 0;
        setTimeout(type, 400);
      }
    } else {
      // show photo at end
      document.getElementById("chocoPhoto").classList.remove("hidden");
    }
  }

  type();
}
