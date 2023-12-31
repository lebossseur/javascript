// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
let OncePlay = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  //
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  //image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //Popup

  if (scrollValue > 0.85 && OncePlay) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    OncePlay = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "transformX(500px)";
});
