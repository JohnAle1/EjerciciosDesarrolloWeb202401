function sumar() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const resultado = document.getElementById("resultado");
  resultado.textContent = `La suma es: ${num1 + num2}`;
}
