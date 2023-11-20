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
  response.style.visibility = "visible";
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.style.visibility = "visible";
    response.style.background = "red";
});
