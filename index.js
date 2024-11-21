const texto = document.getElementById("texto");
const boton = document.getElementById("generador");

function obtenerConsejo() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      texto.textContent = data.slip.advice; 
    })
}

obtenerConsejo();

boton.addEventListener("click", obtenerConsejo);
