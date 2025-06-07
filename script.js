document.getElementById("iniciarBtn").addEventListener("click", function () {
  // Mostrar seções
  document.getElementById("titulo-flores").classList.remove("hidden");
  document.getElementById("cards").classList.remove("hidden");
  document.getElementById("titulo-hobbies").classList.remove("hidden");
  document.getElementById("hobbies").classList.remove("hidden");
  document.getElementById("titulo-generos").classList.remove("hidden");
  document.getElementById("generos").classList.remove("hidden");
  document.getElementById("titulo-caracteristicas").classList.remove("hidden");
  document.getElementById("caracteristicas").classList.remove("hidden");
  document.getElementById("parabens").classList.remove("hidden");

  // Desabilitar botão
  this.disabled = true;
  this.style.cursor = "default";
});

  window.mostrarInfo = function (item) {
    const info = {
      camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
      orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
      margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria.",
      cafe: "☕ Nada como um bom café para inspirar bons momentos!",
      trico: "🧶 Tricotar é uma forma calma e criativa de passar o tempo.",
      jiujitsu: "🥋 O Jiu-jitsu desenvolve disciplina, foco e resistência.",
      romance: "❤️ Histórias de amor que aquecem o coração.",
      dorama: "🎎 Enredos intensos, emoções fortes e personagens cativantes.",
      fantasia: "🦄 Mundos mágicos e aventuras incríveis.",
      acao: "🔥 Adrenalina, luta e superação!"
    };

    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${item}`);
    if (infoDiv) infoDiv.textContent = info[item];
  };

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
