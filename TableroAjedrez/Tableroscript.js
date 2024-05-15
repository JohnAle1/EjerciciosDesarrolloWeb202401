generar = () => {
  const tablero = document.getElementById("tablero");

  for (let fila = 0; fila < 5; fila++) {
    const filaElemento = document.createElement("tr");
    for (let columna = 0; columna < 5; columna++) {
      const casilla = document.createElement("td");
      filaElemento.appendChild(casilla);
      if ((fila + columna) % 2 === 0) {
        casilla.classList.add("casilla-blanca");
      } else {
        casilla.classList.add("casilla-negra");
      }
    }
    tablero.appendChild(filaElemento);
  }
};
