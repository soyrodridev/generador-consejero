const texto = document.getElementById("texto");
const id = document.getElementById("id");
const boton = document.getElementById("generador");

function obtenerConsejo() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      texto.textContent = data.slip.advice; 
      id.textContent = data.slip.id; 
    })
}

obtenerConsejo();

boton.addEventListener("click", obtenerConsejo);
