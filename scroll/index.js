// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let lastScroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    navbar.style.height = "50px";
  }

  lastScroll = window.scrollY;
});
