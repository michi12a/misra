// Definición del objeto gatito
const gatito = {
    nombre: null,
    edad: null,
    sexo: null
};

gatito.nombre = "Misraim";
console.log(gatito);

// Desestructuración de un arreglo
const datos = [1, "hola", 25];
let [num1, cambrano, num3] = datos;

// Uso del spread operator para crear una copia del objeto gatito
let copiaDatos = { ...gatito };
copiaDatos.nombre = "pedro";
console.log(copiaDatos.edad);

// Desestructuración de propiedades del objeto gatito
let { nombre, edad, sexo } = gatito;
console.log(nombre, sexo);

