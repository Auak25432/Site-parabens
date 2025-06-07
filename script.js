document.addEventListener("DOMContentLoaded", function () {
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

  document.getElementById("iniciarBtn").addEventListener("click", function () {
    const elementos = [
      "titulo-flores", "cards",
      "titulo-hobbies", "hobbies",
      "titulo-generos", "generos",
      "titulo-caracteristicas", "caracteristicas",
      "parabens"
    ];
    elementos.forEach(id => document.getElementById(id).classList.remove("hidden"));
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
});
