function updateTime() {
  const hora = new Date();
  const horas = String(hora.getHours()).padStart(2, "0");
  const minutos = String(hora.getMinutes()).padStart(2, "0");
  const segundos = String(hora.getSeconds()).padStart(2, "0");
  const ResultadoTiempo = `${horas}:${minutos}:${segundos}`;
  document.getElementById("relojelemento").textContent = ResultadoTiempo;
}
//Frecuencia de actualizacion de tiempo
setInterval(updateTime, 1000);
