const prompt = require("prompt-sync")();
const porc = 0.15;

class Cooperativa {
    constructor() {
        this._empleados = [];
    }

    agregarEm() {
        let tam = parseInt(prompt("Cantidad de empleados a dar de alta: "));
        for (let i = 0; i < tam; i++) {
            let nombre = prompt("Ingresa el nombre del empleado: ");
            let hrstra = parseInt(prompt("Número de horas trabajadas: "));
            let costxhra = parseFloat(prompt("Ingrese el costo por hora: "));

            let sueldo = this.calcularSueldo(hrstra, costxhra);

            let empleado = {
                nombre: nombre,
                horasTra: hrstra,
                costxhra: costxhra,
                sueldo: sueldo
            };

            this._empleados.push(empleado);
        }
    }

    eliminarEmp() {
        if (this._empleados.length > 0) {
            let empleadoEliminado = this._empleados.pop();
            console.log(`Empleado ${empleadoEliminado.nombre} eliminado.`);
        } else {
            console.log("No hay empleados que eliminar.");
        }
    }

    calcularSueldo(hrstra, costxhra) {
        let sueldo = 0;
        if (hrstra > 8) {
            sueldo = costxhra * 8 + (hrstra - 8) * costxhra * (1 + porc);
        } else {
            sueldo = costxhra * hrstra;
        }
        return sueldo;
    }

    mostrarEmpleados() {
        if (this._empleados.length > 0) {
            this._empleados.forEach((emp, index) => {
                console.log(`${index + 1}. El nombre es ${emp.nombre} y tiene un sueldo de ${emp.sueldo}`);
            });
        } else {
            console.log("No hay empleados que mostrar.");
        }
    }
}

let empleados = new Cooperativa();
empleados.agregarEm();
empleados.mostrarEmpleados();
