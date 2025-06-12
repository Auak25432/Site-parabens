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
      "parabens","titulo-individualidades","individualidades",
      "titulo-defeitos","defeitos"
    ];
    elementos.forEach(id => document.getElementById(id).classList.remove("hidden"));
  });

  window.mostrarInfo = function (item) {
    const info = {
  camelia: "🌸 A camélia simboliza amor e admiração. É uma flor delicada que representa a beleza serena. Realmente é uma flor muito linda, entendo que seja sua favorita",
  orquidea: "💙 A orquídea azul representa raridade, harmonia e paz. Uma flor elegante e misteriosa. Também é uma flor muito linda, sua mãe realmente tem um bom gosto",
  margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria. Muito lindas, Essa flor realmente me lembra você, quando vejo uma margarida é como eu tivesse olhando pra você, esquizofrêniakkkkk",
  cafe: "☕ Nunca vi alguém gostar tanto de café kkkkk",
  trico: "🧶 Tricotar é realmente um passatempo muito bom, apesar de você nunca ter me mostrado um feito, sempre acaba esquecendo kkkkk, mas tudo bem",
  jiujitsu: "🤼 jiu-jitsu é muito bom para proteção pessoal e um ótimo hobbie, sempre me faz pensar duas vezes antes de te irritar kkkkk",
  ler: "📚 Ler livros é realmente muito bom, ótimo para memória.....",
  series_filmes: "📺 Assistir séries, um ótimo hobbie também, sempre foi muito bom puxar assunto sobre isso com você",
  romance: "♥️ Eca.... romance kkkk, tanto gênero pra gostar",
  dorama: "💅 Amo dorama 💅 Kkkkk ",
  fantasia: " 😱 Terror, um gênero que você era muito familiarizada, nunca vi uma pessoa assistir tanto filme de terror",
  acao: "🤣 Comédia mais que a metade da população brasileira gosta, mas eu acho impossível alguém como você nunca ter assistido farofeiros",
  
  // Características
  menina: "🙌🏻 Sempre foi uma menina que sempre coloca Deus em tudo que faz, aprendi muito com você, apesar de ser mais velho, sempre acorda cedo para ler e meditar na palavra, uma jovem centrada na obra, sempre me encorajou em várias coisas relacionadas a igreja, então obrigado 🫡",
  gentil: "☺️ Sempre foi gentil comigo, não importa o quanto eu te irritasse e fosse insistente, mas sempre me tratou e trata as pessoas quão tamanha gentileza",
  inteligente: "🧠 Uma menina muito inteligente, apesar da memória....kkkkk brincadeira, sempre observei, uma menina que é inteligente tanto para as coisas da igreja, como nos estudos, muito esforçada",
  linda: "😍 Tem uma grande beleza tanto exterior como interior, nunca reage bem com elogios.... kkkk",
  humilde: "😇 Sempre foi muito humilde, nunca quis se aparecer, sempre foi muito modesta, eu admiro isso",
  engraçada: "😂 Sempre me fez rir, quando eu conversava com você meu dia melhorava 100%",
  sorridente: "😁 Tem um sorriso contagiante, nunca fui engraçado suficiente pra te fazer rir, mas sempre observo quando alguém te fazia sorrir, é um sorriso que contagiante e muito lindo também",
  madura: "🫡 Tem uma maturidade invejável (inveja santakkkk), se você aceitasse todos os pedidos que já te fiz.... com toda certeza tudo teria dado errado, mas você sempre teve a maturidade de olhar por trás de tudo, realmente eu te agradeço por isso",
  elegante: "😍 Realmente é uma mulher muito elegante, sempre está vestindo roupas que combinam e que são muito elegantes e lindas",
  corajosa: "😅 Uma mulher muito paciente, teve situações que você poderia simplesmente mandar eu ir catar coquinhokkkk, mas sempre foi muito paciente comigo, não importa o tão insistente e chato eu fosse, obrigado",
  especial: "🤗 Você é uma pessoa muito especial, por onde passa se destaca, uma menina única e diferente, na minha vida você é especial",

  // Individualidades únicas (ironia)
    esquecimento: "🧠 Memória excelentekkkkkkk, invejável a capacidade de lembrar as coisas",
    intruso: "🐈‍⬛ Portadora do Intruso, O ser mais fofo e o mais forte da ficção.",
    sinuca: "🎱 Baianinha de Mauá, só pela presença dela na mesa todas as bolas vão para caçapa",
    visao: "👓 Eu não posso te zuar mais sobre isso, estou indo pelo mesmo caminho kkkkkk",
    futebol: "⚽ A maior de todos os tempos, números que superam de Pelé, Messi e Cristiano Ronaldo juntos, (não sabia oq era um gol de bicicleta kkkkk, brincadeira desculpa)",

    // Defeitos
    palmeiras: "🐷 Torcer para o Palmeiras... Podia gabaritar, mas torce para um time sem mundial, logo perde todos argumentos ",
  };

    
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${item}`);
    if (infoDiv) infoDiv.textContent = info[item];
  };
});
