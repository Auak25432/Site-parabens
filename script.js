// Botão de iniciar
document.getElementById("iniciarBtn").addEventListener("click", function () {
  document.getElementById("cards").classList.remove("hidden");
});

// Mostrar informações das flores
function mostrarInfo(flor) {
  const info = {
    camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
    orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
    margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria."
  };

  const infoBox = document.getElementById("flowerInfo");
  infoBox.textContent = info[flor];
  infoBox.classList.remove("hidden");

  const parabens = document.getElementById("parabens");
  parabens.classList.remove("hidden");
}

// Emojis flutuantes
const emojiContainer = document.getElementById("emojiContainer");
const emojis = ['🎉', '🎊', '🎂', '🎈', '💖'];

function createFloatingEmoji() {
  const span = document.createElement("span");
  span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = 5 + Math.random() * 5 + "s";
  emojiContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 10000);
}

setInterval(createFloatingEmoji, 600);
