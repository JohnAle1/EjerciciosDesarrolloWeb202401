generar = () => {
  const tablero = document.getElementById("tablero");
  tablero.innerHTML = ""; // Limpiar el contenido anterior del tablero
  let fingreso = parseInt(document.getElementById("fingreso").value) - 1;
  let cingreso = parseInt(document.getElementById("fcolumna").value) - 1;
  for (let fila = 0; fila < 8; fila++) {
    const filaElemento = document.createElement("tr");
    for (let columna = 0; columna < 8; columna++) {
      const casilla = document.createElement("td");
      filaElemento.appendChild(casilla);
      if ((fila + columna) % 2 === 0) {
        casilla.classList.add("casilla-blanca");
      } else {
        casilla.classList.add("casilla-negra");
      }
      // Creación de elemento para generar imagen
      const Cimagen = document.createElement("img");
      if (fila === fingreso && columna === cingreso) {
        Cimagen.src = "Peon.png";
        Cimagen.classList.add("EstiloImagen");
        casilla.appendChild(Cimagen);
      }
      if (fila === fingreso || columna === cingreso) {
        casilla.addEventListener("click", MovimientoPosible);
      } else {
        casilla.addEventListener("click", MovimientoImposible);
      }
    }
    tablero.appendChild(filaElemento);
  }
};

function MovimientoPosible() {
  this.classList.toggle("posiblemovimiento");
}
function MovimientoImposible() {
  this.classList.toggle("movimientoImposible");
}
