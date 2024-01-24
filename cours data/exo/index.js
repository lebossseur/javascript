const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
};

const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
    }
  }, 50);
};
loop();
