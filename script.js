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
      "parabens", "individualidades", "defeitos"
    ];
    elementos.forEach(id => document.getElementById(id).classList.remove("hidden"));
  });

  window.mostrarInfo = function (item) {
    const info = {
  camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena.",
  orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa.",
  margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria.",
  cafe: "☕ Nada como um café quentinho para aquecer o coração e começar bem o dia.",
  trico: "🧶 Tricotar é mais do que um passatempo, é criar com carinho cada ponto cheio de afeto.",
  jiujitsu: "🥋 Jiu-jitsu é disciplina, força e leveza ao mesmo tempo. Um verdadeiro estilo de vida.",
  ler: "📚 Ler livros é uma viagem para dentro de si e para fora do mundo real.",
  series_filmes: "🎥 Nada como maratonar uma boa série ou assistir aquele filme inesquecível no fim do dia.",
  romance: "❤️ Histórias de amor que aquecem o coração.",
  dorama: "🎎 Enredos intensos, emoções fortes e personagens cativantes.",
  fantasia: "🦄 Mundos mágicos e aventuras incríveis.",
  acao: "🔥 Adrenalina, luta e superação!",
  
  // Características
  menina: "🙏 Uma jovem guiada pela fé, com um coração voltado a Deus e aos bons valores.",
  gentil: "💖 Uma pessoa que trata os outros com carinho, atenção e respeito.",
  inteligente: "🧠 Raciocínio rápido, sabedoria e uma mente curiosa e brilhante.",
  linda: "🌟 Beleza por fora e ainda mais por dentro, com um brilho único.",
  humilde: "🍃 Simples, verdadeira e com o coração aberto para aprender e ajudar.",
  engraçada: "😂 Capaz de fazer sorrir até nos dias mais difíceis.",
  sorridente: "😊 Seu sorriso ilumina o ambiente e transmite alegria.",
  madura: "🧘‍♀️ Alguém que sabe lidar com a vida com equilíbrio e responsabilidade.",
  elegante: "🧘‍♀️ Alguém que sabe lidar com a vida com equilíbrio e responsabilidade.",
  corajosa: "🦁 Enfrenta desafios com determinação e não foge dos seus sonhos.",
  especial: "🌷 Única, incomparável e insubstituível. Uma verdadeira bênção na vida de quem a conhece.",

  // Individualidades únicas
  esquecimento: "Tem uma memória tão boa que esquece o que ia dizer enquanto ainda tá falando. (amnésia kkk)",
  intruso: "Ela é a portadora do intruso — o ser mais forte da ficção. Nem Goku compete.",
  sinuca: "Campeã mundial de sinuca! Todos tremem diante de suas jogadas lendárias. 😱",
  visaoAguia: "Visão de águia: enxerga até os átomos. Superman chora de inveja.",
  futebol: "A maior jogadora de futebol de todos os tempos! Marta ou Ingryd? Eis a questão. 🧐",

  // Defeitos
  palmeiras: "Torcer para o Palmeiras... esse é o defeito mais difícil de perdoar. 😅",  
};

    
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${item}`);
    if (infoDiv) infoDiv.textContent = info[item];
  };
});
