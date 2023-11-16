// Código para esconder la navbar al deslizar hacia abajo, después de los 600px
// Y mostrarla al deslizar hacia arriba

let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');
const scrollThreshold = 600; // Umbral de desplazamiento en píxeles

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > scrollThreshold) {
    if (prevScrollPos > currentScrollPos) {
      navbar.classList.remove('hide');
    } else {
      navbar.classList.add('hide');
    }
  }

  prevScrollPos = currentScrollPos;
};