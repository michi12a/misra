/* EXAMEN DE Misraim Ruiz Hernandez */
const prompt = require('prompt-sync')();

class personalSociedad {
    constructor(nombre, apellido, RFC, direccion, telefono, sueldo, horasExtras) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._RFC = RFC;
        this._direccion = direccion;
        this._telefono = telefono;
        this._sueldo = sueldo;
        this._horasExtras = horasExtras;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get apellido() {
        return this._apellido;
    }

    set RFC(RFC) {
        this._RFC = RFC;
    }

    get RFC() {
        return this._RFC;
    }

    set direccion(direccion) {
        this._direccion = direccion;
    }

    get direccion() {
        return this._direccion;
    }

    set telefono(telefono) {
        this._telefono = telefono;
    }

    get telefono() {
        return this._telefono;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    get sueldo() {
        return this._sueldo;
    }

    set horasExtras(horasExtras) {
        this._horasExtras = horasExtras;
    }

    get horasExtras() {
        return this._horasExtras;
    }

    sueldoTotal() {
        let bonificacion = this._horasExtras > 0 ? this._sueldo * 0.15 : 0;
        return this._sueldo + bonificacion;
    }
}

class gestionSociedad {
    constructor() {
        this._empleados = [];
    }

    añadirEmpleado() {
        const nombre = prompt('Nombre: ');
        const apellido = prompt('Apellido: ');
        const RFC = prompt('RFC: ');
        const direccion = prompt('Dirección: ');
        const telefono = prompt('Teléfono: ');
        const sueldo = parseFloat(prompt('Sueldo: '));
        const horasExtras = parseFloat(prompt('Horas extras: '));

        const empleado = new personalSociedad(nombre, apellido, RFC, direccion, telefono, sueldo, horasExtras);
        this._empleados.push(empleado);
        console.log("Empleado contratado.");
    }

    despedirUltimoEmpleado() {
        if (this._empleados.length === 0) {
            console.log("No hay empleados por despedir.");
        } else {
            const empleadoDespedido = this._empleados.pop();
            console.log(`El empleado ${empleadoDespedido.nombre} ${empleadoDespedido.apellido} ha sido despedido.`);
        }
    }

    verEmpleados() {
        if (this._empleados.length === 0) {
            console.log("No hay empleados en la lista.");
        } else {
            this._empleados.forEach((empleado, index) => {
                console.log(`${index + 1}. Nombre: ${empleado.nombre}, Apellido: ${empleado.apellido}, RFC: ${empleado.RFC}, Sueldo Total: ${empleado.sueldoTotal()}`);
            });
        }
    }
}

const gestion = new gestionSociedad();

let continuar = true;

while (continuar) {
    console.log("\n--- Gestión de Empleados ---");
    console.log("1. Contratar un empleado");
    console.log("2. Despedir al último empleado");
    console.log("3. Ver lista de empleados");
    console.log("4. Salir");
    const opcion = prompt("Elige una opción: ");

    switch (opcion) {
        case "1":
            gestion.añadirEmpleado();
            break;
        case "2":
            gestion.despedirUltimoEmpleado();
            break;
        case "3":
            gestion.verEmpleados();
            break;
        case "4":
            continuar = false;
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }
}