class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Alumno extends Persona {
    constructor(noControl, nombre) {
        super(nombre);
        this.noControl = noControl;
        this.calificaciones = {};
    }

    agregarCalificacion(materia, docente, calificaciones) {
        this.calificaciones[materia] = { docente, calificaciones };
    }

    calcularPromedio(materia) {
        const { calificaciones } = this.calificaciones[materia];
        const suma = calificaciones.reduce((acc, cal) => acc + cal, 0);
        return suma / calificaciones.length;
    }
}

class Docente extends Persona {
    constructor(nombre) {
        super(nombre);
    }
}

const alumnos = [
    new Alumno(1, "Dany"),
    new Alumno(2, "Luis")
];

const docentes = [
    new Docente("José"),
    new Docente("Pedro"),
    new Docente("Juan")
];

alumnos[0].agregarCalificacion("Matemáticas", docentes[0].nombre, [90, 95, 90]);
alumnos[0].agregarCalificacion("Física", docentes[1].nombre, [85, 75, 80]);
alumnos[0].agregarCalificacion("Programación", docentes[2].nombre, [30, 30, 30]);

alumnos[1].agregarCalificacion("Matemáticas", docentes[0].nombre, [75, 85, 80]);
alumnos[1].agregarCalificacion("Física", docentes[1].nombre, [70, 30, 4]);

function mostrarTabla(alumnos) {
    console.log("No. Control | Alumno | Materia      | Docente | Calificaciones   | Promedio");
    console.log("--------------------------------------------------------------------------------");

    alumnos.forEach(alumno => {
        for (const materia in alumno.calificaciones) {
            const { docente, calificaciones } = alumno.calificaciones[materia];
            const promedio = alumno.calcularPromedio(materia);
            console.log(
                `${alumno.noControl} | ${alumno.nombre} | ${materia.padEnd(12)} | ${docente.padEnd(6)} | ${calificaciones.join(", ")} | ${promedio.toFixed(2)}`
            );
        }
    });
}

mostrarTabla(alumnos);
