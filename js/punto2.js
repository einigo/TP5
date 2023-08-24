"use strict";
/*2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, 
permitiendo ingresar las propiedades mediante un formulario, también agregar los botones 
“mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.*/

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "Desconocida";
    let rasgo = "No se pudo determinar el rasgo característico.";

    switch (true) {
      case (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010):
        generacion = "Generación Z";
        rasgo = "Irreverencia.";
        break;
      case (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993):
        generacion = "Generación Millennials";
        rasgo = "Frustración.";
        break;
      case (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980):
        generacion = "X";
        rasgo = "Obseción por el exito";
        break;
      case (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968):
        generacion = "Baby boom";
        rasgo = "Ambición";
        break;
      case (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948):
        generacion = "Silent generation";
        rasgo = "Austeridad";
        break;
      default:
        generacion = "Generación Desconocida";
        rasgo = "No se pudo determinar el rasgo característico.";
        break;
    }
    return `Generación: ${generacion}, Rasgo Característico: ${rasgo}`;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `
          Nombre: ${this.nombre}
          Edad: ${this.edad}
          DNI: ${this.DNI}
          Sexo: ${this.sexo}
          Peso: ${this.peso}
          Altura: ${this.altura}
          Año de Nacimiento: ${this.añoNacimiento}
      `;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const crearPersonaBtn = document.getElementById("crearPersonaBtn");
  const mostrarGeneracionBtn = document.getElementById("mostrarGeneracionBtn");
  const esMayorDeEdadBtn = document.getElementById("esMayorDeEdadBtn");

  let persona;

  crearPersonaBtn.addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);
    const DNI = document.getElementById("DNI").value;
    const sexo = document.getElementById("sexo").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const añoNacimiento = parseInt(
      document.getElementById("añoNacimiento").value
    );

    persona = new Persona(nombre, edad, DNI, sexo, peso, altura, añoNacimiento);
    alert("Persona creada correctamente.");
  });

  mostrarGeneracionBtn.addEventListener("click", function () {
    if (persona) {
      const generacionInfo = persona.mostrarGeneracion();
      alert(generacionInfo);
    } else {
      alert("Crea una persona primero.");
    }
  });

  esMayorDeEdadBtn.addEventListener("click", function () {
    if (persona) {
      const mensaje = persona.esMayorDeEdad()
        ? "Es mayor de edad."
        : "No es mayor de edad.";
      alert(mensaje);
    } else {
      alert("Crea una persona primero.");
    }
  });
});
