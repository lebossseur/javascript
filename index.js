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

/*************************************************** */

const keypressContainer = document.querySelector(".keypress");
console.log(keypressContainer);
