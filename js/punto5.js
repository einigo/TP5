'use strict'
/* 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar. */
const tiempoDisplay = document.getElementById("tiempo");
const inicioPausaButton = document.getElementById("inicioPausa");
const resetButton = document.getElementById("reset");

let timer;
let funciona = false;
let segundos = 0;
let minutos = 0;
let horas = 0;

function actualizarTiempo() {
  segundos++;
  if (segundos === 60) {
    segundos = 0;
    minutos++;
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }
  tiempoDisplay.textContent = `${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

inicioPausaButton.addEventListener("click", () => {
  if (funciona) {
    clearInterval(timer);
    inicioPausaButton.textContent = "Iniciar";
  } else {
    timer = setInterval(actualizarTiempo, 1000);
    inicioPausaButton.textContent = "Pausar";
  }
  funciona = !funciona;
});

resetButton.addEventListener("click", () => {
  clearInterval(timer);
  tiempoDisplay.textContent = "00:00:00";
  inicioPausaButton.textContent = "Iniciar";
  funciona = false;
  segundos = 0;
  minutos = 0;
  horas = 0;
});
