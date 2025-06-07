document.addEventListener("DOMContentLoaded", function () {
  // Botão Iniciar
  document.getElementById("iniciarBtn").addEventListener("click", function () {
    document.getElementById("floresSection").classList.remove("hidden");
    document.getElementById("hobbiesSection").classList.remove("hidden");
    document.getElementById("parabens").classList.remove("hidden");
  });

  // Mostrar informações
  window.mostrarInfo = function (id) {
    const textos = {
      camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
      orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
      margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria.",
      livros: "📚 Ler livros é uma forma incrível de viajar sem sair do lugar, mergulhar em histórias e aprender coisas novas.",
      trico: "🧶 Tricotar é relaxante e criativo, ideal para expressar carinho através de peças feitas à mão.",
      jiujitsu: "🥋 O jiu-jitsu desenvolve disciplina, força e autoconfiança. Um hobby poderoso!"
    };

    // Limpar todos
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");

    // Mostrar apenas o clicado
    const infoDiv = document.getElementById(`info-${id}`);
    if (infoDiv) {
      infoDiv.textContent = textos[id];
    }
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
