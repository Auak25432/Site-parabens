const iniciarBtn = document.getElementById("iniciarBtn");
const cards = document.getElementById("cards");
const parabens = document.getElementById("parabens");
const dicaClique = document.getElementById("dicaClique");

iniciarBtn.addEventListener("click", () => {
  cards.classList.remove("hidden");
  parabens.classList.remove("hidden");
  dicaClique.classList.remove("hidden");
  iniciarBtn.style.display = "none";
});

// Mostrar info da flor
function mostrarInfo(flor) {
  const todasInfos = document.querySelectorAll(".info");
  todasInfos.forEach(info => info.classList.add("hidden"));

  const info = document.getElementById(`info-${flor}`);
  if (info) {
    info.classList.remove("hidden");
  }
}

// Emojis flutuando
const emojis = ["🎂", "🎉", "🎈", "💖", "🎊", "🍰", "🎁", "🌸"];
const emojiContainer = document.getElementById("emojiContainer");

function criarEmoji() {
  const emoji = document.createElement("div");
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.position = "absolute";
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = "24px";
  emoji.style.animation = `flutuar ${5 + Math.random() * 5}s linear infinite`;
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

setInterval(criarEmoji, 800);

const style = document.createElement("style");
style.textContent = `
@keyframes flutuar {
  from { top: -10%; opacity: 1; }
  to { top: 110%; opacity: 0; }
}`;
document.head.appendChild(style);
