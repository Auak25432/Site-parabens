document.addEventListener("DOMContentLoaded", function () {
  // Quando clicar no botão Iniciar
  document.getElementById("iniciarBtn").addEventListener("click", function () {
    document.getElementById("tituloFlores").classList.remove("hidden");
    document.getElementById("cards").classList.remove("hidden");
    document.getElementById("parabens").classList.remove("hidden");
  });

  // Mostrar informações das flores
  window.mostrarInfo = function (flor) {
    const info = {
      camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
      orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
      margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria."
    };

    // Limpa os textos anteriores
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");

    // Insere o texto no card clicado
    const infoDiv = document.getElementById(`info-${flor}`);
    infoDiv.textContent = info[flor];
  };

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
