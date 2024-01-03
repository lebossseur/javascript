//Rappel des types de données

let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //undefined

//Tableaux

let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array[2][3]);

let array2 = ["Bordeaus", 24, true, [1, 2], { nom: "Denis" }];
console.log(array2[4].nom);

//les objets
let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["javascript", "React", "NodeJs"],
  admin: false,
};

//console.log(objet.technos[0][1]);
//ajouter un elt à l'elt

objet.adresse = "22 rue du code";

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
//console.log(data[2].pseudo);
console.log(data[2].pseudo);

//les structures de contrôle
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " plus agé que " + data[1].pseudo);
} else if (data[0].age < data[1].age) {
  console.log(data[1].pseudo + " plus agé que " + data[0].pseudo);
}

//while
let w = 0;
while (w < 10) {
  w++;
  console.log("la valeur de w est " + w);
}

//do while
let d = 0;

do {
  d++;
  console.log(d);
} while (d < 5);

// les boucles for

for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}
//on declare la valeuir de i / on dit jusqu'ou on boucle / on incremente i

for (i = 0; i < data.length; i++) {
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += `<h2>${data[i].pseudo}</h2>`;
}
document.body.addEventListener("click", (e) => {
  console.log(e.target.id);

  //   if (e.target.id === "javascript") {
  //     document.body.style.background = "yellow";
  //
  //}

  ///switch
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
