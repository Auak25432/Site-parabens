document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("iniciarBtn").addEventListener("click", function () {
    document.getElementById("titulo-flores").classList.remove("hidden");
    document.getElementById("cards").classList.remove("hidden");
    document.getElementById("titulo-hobbies").classList.remove("hidden");
    document.getElementById("hobbies").classList.remove("hidden");
    document.getElementById("titulo-generos").classList.remove("hidden");
    document.getElementById("generos").classList.remove("hidden");
    document.getElementById("parabens").classList.remove("hidden");
  });

  window.mostrarInfo = function (flor) {
    const info = {
  camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
  orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
  margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria.",
  
  // Hobbies
  cafe: "☕ Nada como um café para aquecer o coração e despertar a mente. Um hobby saboroso e reconfortante.",
  trico: "🧶 Tricotar é uma forma de relaxar, criar e expressar carinho em cada ponto.",
  jiujitsu: "🥋 O Jiu-jitsu desenvolve disciplina, foco e autoconfiança. Um esporte que fortalece corpo e mente.",
  
  // Gêneros
  romance: "❤️ Histórias românticas tocam o coração e falam sobre amor em suas várias formas.",
  dorama: "🎎 Doramas encantam com suas narrativas emocionantes e cultura envolvente.",
  fantasia: "🧙‍♂️ Fantasia transporta para mundos mágicos e aventuras épicas além da imaginação.",
  acao: "💥 Ação traz adrenalina, ritmo acelerado e emoções fortes em cada cena."
};
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${flor}`);
    infoDiv.textContent = info[flor];
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
