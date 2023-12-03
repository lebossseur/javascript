// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background="red"

//click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector("p");
console.log(btn1, btn2);
console.log(response);
questionContainer.addEventListener("click", () => {
  // questionContainer.style.background="red";
  // questionContainer.style.border="3px solid teal";
  questionContainer.classList.toggle("question-click");
});
//-------------------------------------------
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//Mouve event
const mousemove = document.querySelector(".mousemove");
//console.log(mousemove);

window.addEventListener("mousemove", (e) => {
  // console.log(e);
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", (e) => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", (e) => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  console.log("mouseout !");
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

/*************************keypress************************** */

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  // audio.src="z.mp3";
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "red";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "gray";
  }
  if (e.key === "z") {
    ring(e.key);
  }
});

/*************************Scroll event************************** */

const nav = document.querySelector("nav");
//console.log(nav);

window.addEventListener("scroll", (e) => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

/*************************forms events************************** */

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
//console.log(form);
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  console.log(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("yes !");


  if (cgv.checked) {
    //affiche le contenu des variables
    document.querySelector(" form > div").innerHTML = '
    <h3>pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    ';

  } else {
    alert("Veuillez accepter les CGV !");
  }

});



