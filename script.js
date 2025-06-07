function mostrarInfo(id) {
  const info = document.getElementById("info-" + id);
  if (info) {
    const mensagens = {
      camelia: "Camélia representa o amor delicado.",
      orquidea: "Orquídea azul simboliza raridade e beleza.",
      margarida: "Margarida transmite pureza e alegria.",
      cafe: "Nada como um café para aquecer a alma.",
      trico: "Tricotar é criar com amor e paciência.",
      jiujitsu: "Jiu-jitsu traz disciplina e força.",
      romance: "Histórias de amor que tocam o coração.",
      dorama: "Dramas coreanos com emoções intensas.",
      fantasia: "Universos mágicos cheios de imaginação.",
      acao: "Ação para quem gosta de adrenalina.",
      gentil: "Você é gentil porque espalha leveza por onde passa.",
      inteligente: "Sua inteligência brilha em cada conversa.",
      engracada: "Você sempre arranca sorrisos.",
      sorridente: "Seu sorriso ilumina qualquer ambiente."
    };
    info.innerHTML = mensagens[id] || "Informações sobre " + id;
    info.style.display = "block";
  }
}
