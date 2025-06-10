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
  margarida: "🌼 Margaridas pequenas são símbolo de pureza, juventude e ternura. Transmitem doçura e alegria. Muito lindas, Essa flor realmente me lembra você, quando vejo uma margarida é como eu tivesse olhando pra você (esquizofrênico kkkk)",
  cafe: "Nunca vi alguém gostar tanto de café kkkk",
  trico: "Tricotar é realmente um passatempo muito bom, apesar de você nunca ter me mostrado um feito, sempre acaba esquecendo kkkk, mas tudo bem",
  jiujitsu: "jiu-jitsu é muito bom para proteção pessoal e um ótimo hobbie, sempre me faz pensar duas vezes antes de te irritar kkkkk",
  ler: "Ler livros é realmente muito bom, ótimo para memória....",
  series_filmes: "Assistir séries, um ótimo hobbie também, sempre foi muito bom puxar assunto sobre isso com você",
  romance: "eca... romance kkkk",
  dorama: "Preciso falar alguma coisa sobre isso? kkkkkk ",
  fantasia: "Terror, um gênero que você era muito familiarizada, nunva vi uma pessoa assistir tanto filme de terror",
  acao: "Comédia mais que a metade da população brasileira gosta, mas eu acho impossível alguém como você nunca ter assistido farofeiros",
  
  // Características
  menina: "Sempre foi uma menina que sempre coloca Deus em tudo que faz, aprendi muito com você, apesar de ser mais velho, posso falar que você sempre foi meu exemplo como cristão, você sempre acorda cedo para ler e meditar na palavra, uma jovem centrada na obra, sempre me encorajou em várias coisas relacionadas a igreja, então eu digo obrigado",
  gentil: "Sempre foi gentil comigo, não importa o quanto eu te irritasse, quando prometia coisas que eu não cumpria, mas sempre me tratou e trata as pessoas quão tamanha gentileza",
  inteligente: "Uma menina muito.... inteligente, apesar da memória...kkkk brincadeira, sempre observei, uma menina que é inteligente tanto para as coisas da igreja, como nos estudos, muito esforçada",
  linda: "Tem uma grande beleza tanto exterior como interior, não reage bem com elogios..., apesar de ser muito linda, mas não vou me prolongar kkkk",
  humilde: "Sempre foi muito humilde, nunca quis se aparecer, sempre foi muito modesta, eu admiro isso",
  engraçada: "Sempre minha mãe perguntava porque eu ficava rindo do celular, a maioria das vezes era por causa de você, sempre você fazia eu rir de alguma forma, não importava o quão ruim meu dia estava",
  sorridente: "Tem um sorriso contagiante, eu nunca fui engraçado suficiente pra te fazer dar risadas, mas sempre observo quando alguém te fazia sorrir, é um sorriso que contagiante e muito lindo também",
  madura: "Tem uma maturidade invejável (inveja santa kkkk), se você aceitasse todos os pedidos que já te fiz, com toda certeza tudo teria dado errado, mas você sempre teve a maturidade de olhar por trás de tudo, realmente eu te agradeço por isso",
  elegante: "Realmente é uma mulher muito elegante, sempre está vestindo roupas que combinam e que são muito elegantes e lindas",
  corajosa: "Uma mulher muito paciente, deve situações que você poderia simplesmente mandar eu ir catar coquinhokkkk, mas sempre foi muito paciente com minha pessoa 😇, obrigado",
  especial: "Única, você acabou se tornando uma pessoa muito especial para minha vida, especial é uma palavra que não explica o que você é pra mim, realmente única, você é única pra mim, você não pode pensar a mesma coisa sobre mim kkkkkk, mas pra mim você é única e especial, tanto na minha vida como na sua família",

  // Individualidades únicas (ironia)
    esquecimento: "Memória excelente kkkkkkk, invejável a capacidade de lembrar as coisas",
    intruso: "Portadora do grande Intruso, O ser mais forte da ficção.",
    sinuca: "Todos tremem diante de suas jogadas lendárias. Baianinha de Mauá, só pela presença dela na mesa, todas as bolas vão para caçapa",
    visao: "Visão de águia, eu não posso te zuar mais sobre isso, eu estou indo pelo mesmo caminho kkkkkk",
    futebol: "A maior de todos os tempos, números que superam de Pelé, Messi e Cristiano Ronaldo juntos, (não sabia oq era um gol de bicicleta kkkkk, brincadeira desculpa)",

    // Defeitos
    palmeiras: "Torcer para o Palmeiras... Podia gabaritar, mas torce para um time sem mundial, logo perde todos argumentos ",
  };

    
    document.querySelectorAll(".info").forEach(div => div.innerHTML = "");
    const infoDiv = document.getElementById(`info-${item}`);
    if (infoDiv) infoDiv.textContent = info[item];
  };
});
