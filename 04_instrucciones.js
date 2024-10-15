/* const prompt = require('prompt-sync')();

numero1 = parseInt(prompt("ingrese el numero 1:"))
numero2 = parseInt(prompt("ingrese el valor 2:"));

let numero1 = 23;
let numero2 = 3;

console.log(numero1 * numero2); */
/* const prompt = require('prompt-sync')();
let numeros = [];

const datosArreglo = () => {
    const cantidad = parseInt(prompt("¿Cuántos valores deseas ingresar? "));

    for (let i = 0; i < cantidad; i++) {
        const valor = parseInt(prompt(`Ingresa el valor ${i + 1}: `));
        numeros.push(valor);
    }
    console.log("arreglo:");
    numeros.forEach((numero, index) => {
        console.log(`${index + 1}. ${numero}`);
    });
}

datosArreglo(); */

const prompt = require('prompt-sync')();
let objetos = [];

const datosArreglo = () => {
    const cantidad = parseInt(prompt("¿Cuántos objetos deseas ingresar? "), 10);

    for (let i = 0; i < cantidad; i++) {
        console.log(`Ingresa los datos para el objeto ${i + 1}:`);
        const nombre = prompt("Nombre: ");
        const apellido = prompt("Apellido: ");
        const edad = parseInt(prompt("Edad: "));

        const objeto = {
            nombre: nombre,
            apellido: apellido,
            edad: edad
        };

        objetos.push(objeto);
    }
    console.log("Objetos ingresados en el arreglo:");
    objetos.forEach((objeto, index) => {
        console.log(`${index + 1}. Nombre: ${objeto.nombre}, Apellido: ${objeto.apellido}, Edad: ${objeto.edad}`);
    });
}

datosArreglo();