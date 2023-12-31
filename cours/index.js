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

// btn2.addEventListener("click", () => {
//   response.classList.add("show-response");
//   response.style.background = "red";
// });

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
    document.querySelector(" form > div").innerHTML =
      "<h3>pseudo : ${pseudo}</h3> ";

    //<h4>Langage préféré : ${language}</h4>
  } else {
    alert("Veuillez accepter les CGV !");
  }
});

//load event

window.addEventListener("load", () => {
  console.log("Document chargé !");
});

//forEach
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//addEventListener Vs onclick

document.body.onclick = () => {
  console.log("Click !");
};
// avec addEventListener on peut lui adosser plusieurs fonctions

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1 !");
  },
  false
);
//usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log("click 2 !");
  },
  true
);

//stopPropagation

questionContainer.addEventListener("click", (e) => {
  alert("Test !");
  e.stopPropagation;
});

//removeEventListener

// le BOM Browser Object Model

//console.log(window.innerHeight);

//window.open("http://google.com", " cours js", "height=600, width=800");

//window.close();

//evts adossés à,window

//window.alert("alert");
//confirm

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment tromper ?");
});

//promt
let answer;
btn1.addEventListener("click", () => {
  let answer = prompt("entrer votre nom");
  questionContainer.innerHTML = "<h3>Bravo" + answer + "</h3>";
});

//timer compte à rebours
setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);

// setInterval(() => {
//   document.body.innerHTML +=
//   "<div class='box'><h2>Nouvelle Boite</h2></div>";
// }, 1000);

document.body.addEventListener("click", (e) => {
  e.target.remove();
  clearInterval(interval);
});

//location

// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

//location.replace("http://lequipe.fr");
// window.onload = () => {
//   location.href = "http://lequipe.fr";
// };

//navigator

//console.log(navigator.userAgent);

//console.log(window.history);
//window.history.back();

/////////////***********setProperty************** */

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");

});
