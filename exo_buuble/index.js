//fonction bubbleMaker
const bubbleMaker = () => {
  //variable de creation de span
  const bubble = document.createElement("span");
  //le mettre sur le dom
  document.body.appendChild(bubble);
  //injection d'une classe
  bubble.classList.add("bubble");
  //definition de la taille
  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  //la position par rapport à top

  bubble.style.top = Math.random() * 100 + 50 + "%";
  //la position par rapport à left
  bubble.style.left = Math.random() * 100 + "%";

  //1 ou -1 de left
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  //donner une valeur à la variable left

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
};
setInterval(bubbleMaker, 300);
