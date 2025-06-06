const iniciarBtn = document.getElementById("iniciarBtn");
const cards = document.getElementById("cards");
const parabens = document.getElementById("parabens");

iniciarBtn.addEventListener("click", () => {
  cards.classList.remove("hidden");
  parabens.classList.remove("hidden");
  iniciarBtn.style.display = "none";
});

function mostrarInfo(flor) {
  const flowerInfo = document.getElementById("flowerInfo");
  let texto = "";

  switch (flor) {
    case "camelia":
      texto = "A camélia simboliza amor e admiração. É uma flor delicada e cheia de significado!";
      break;
    case "orquidea":
      texto = "A orquídea azul representa paz, harmonia e raridade. Assim como você! 💙";
      break;
    case "margarida":
      texto = "As margaridas pequenas significam pureza, inocência e alegria. 🌼";
      break;
  }

  flowerInfo.textContent = texto;
  flowerInfo.classList.remove("hidden");
}
