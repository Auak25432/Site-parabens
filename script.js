const startButton = document.getElementById('startButton');
const flowerCards = document.getElementById('flowerCards');
const flowerInfo = document.getElementById('flowerInfo');
const infoText = document.getElementById('infoText');
const parabens = document.getElementById('parabens');
const music = document.getElementById('music');
const musicButton = document.getElementById('musicButton');

startButton.addEventListener('click', () => {
  startButton.classList.add('hidden');
  flowerCards.classList.remove('hidden');
  music.play();
});

const flowerDescriptions = {
  camelia: "A camélia é símbolo de admiração, delicadeza e amor verdadeiro. Ela representa o afeto sincero e a beleza serena.",
  orquidea: "A orquídea azul representa raridade, elegância e espiritualidade. Uma flor exótica que transmite paz e admiração profunda.",
  margarida: "As margaridas pequenas transmitem pureza, inocência e alegria. Elas são flores simples, mas com um grande significado afetivo."
};

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const flower = card.getAttribute('data-flower');
    infoText.textContent = flowerDescriptions[flower];
    flowerInfo.classList.remove('hidden');
    parabens.classList.remove('hidden');
  });
});

let isPlaying = true;
musicButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    music.play();
  } else {
    music.pause();
  }
});
