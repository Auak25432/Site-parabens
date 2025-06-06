document.addEventListener("DOMContentLoaded", function () {
  const iniciarBtn = document.getElementById("iniciarBtn");
  const cardsContainer = document.getElementById("cards");
  const parabens = document.getElementById("parabens");

  iniciarBtn.addEventListener("click", function () {
    cardsContainer.classList.remove("hidden");
    parabens.classList.remove("hidden");
    iniciarBtn.style.display = "none";
  });

  const infoText = {
    camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
    orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
    margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria."
  };

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
      const flor = card.getAttribute("data-flor");

      // Limpa todas as descrições antes de mostrar a nova
      document.querySelectorAll(".info").forEach(info => info.textContent = "");

      const infoDiv = document.getElementById(`info-${flor}`);
      infoDiv.textContent = infoText[flor];
    });
  });

  // Emojis flutuantes
  const emojiContainer = document.getElementById("emojiContainer");
  const emojis = ['🎉', '🎊', '🎂', '🎈', '💖'];

  function createFloatingEmoji() {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 5 + Math.random() * 5 + "s";
    emojiContainer.appendChild(span);
    setTimeout(() => span.remove(), 10000);
  }

  setInterval(createFloatingEmoji, 600);
});
