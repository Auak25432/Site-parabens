document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("iniciarBtn").addEventListener("click", function () {
    document.getElementById("titulo-flores").classList.remove("hidden");
    document.getElementById("cards").classList.remove("hidden");
    document.getElementById("titulo-hobbies").classList.remove("hidden");
    document.getElementById("hobbies").classList.remove("hidden");
    document.getElementById("parabens").classList.remove("hidden");
  });

  window.mostrarInfo = function (flor) {
    const info = {
      camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
      orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
      margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria."
    };

    document.querySelectorAll("#cards .info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${flor}`);
    infoDiv.textContent = info[flor];
  };

  window.mostrarInfoHobby = function (hobby) {
    const infoHobbies = {
      cafe: "☕ Tomar café é um momento de aconchego e reflexão, além de ser delicioso!",
      trico: "🧶 Tricotar é um passatempo relaxante e criativo, que resulta em peças feitas com carinho.",
      jiujitsu: "🥋 O jiu-jitsu desenvolve disciplina, foco e fortalece corpo e mente."
    };

    document.querySelectorAll("#hobbies .info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${hobby}`);
    infoDiv.textContent = infoHobbies[hobby];
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
