'use strict'
/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número
 aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y 
 un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo 
 adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

const numeroMagico = Math.floor(Math.random() * 100);

const input = document.getElementById('input-numero-magico');
const button = document.getElementById('button-numero-magico');

const adivinarNumero = () => {
  const valorUsuario = input.value;

  if (isNaN(Number(valorUsuario))) {
    alert('Entrada no valida');
    return;
  }

  if (numeroMagico === Number(valorUsuario)) {
    alert(`Ganaste! El numero era ${numeroMagico}`);
    return;
  }

  if (numeroMagico > valorUsuario) {
    alert('El numero es aún mayor');
  } else {
    alert('El numero es aún menor');
  }
};

button.addEventListener('click', adivinarNumero);