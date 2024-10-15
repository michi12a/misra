const prompt = require('prompt-sync')();

class Cliente {
    constructor() {
        this.clientes = [];
    }

    registrarCliente() {
        const numeroMembresia = prompt('Número de Membresía: ');
        const nombre = prompt('Nombre: ');
        const direccion = prompt('Dirección: ');
        const telefono = prompt('Teléfono: ');
        const estado = prompt('Estado (deudor/libre): ');

        const cliente = { numeroMembresia, nombre, direccion, telefono, estado };
        this.clientes.push(cliente);
        console.log('Cliente registrado con éxito.');
    }

    consultarClientes() {
        console.log('Listado de Clientes:');
        this.clientes.forEach(cliente => {
            console.log(`Membresía: ${cliente.numeroMembresia}, Nombre: ${cliente.nombre}, Estado: ${cliente.estado}`);
        });
    }

    eliminarCliente() {
        const numero = prompt('Número de Membresía del cliente a eliminar: ');
        this.clientes = this.clientes.filter(cliente => cliente.numeroMembresia !== numero);
        console.log('Cliente eliminado.');
    }
}

class Pelicula {
    constructor() {
        this.peliculas = [];
    }

    registrarPelicula() {
        const numero = prompt('Número de Película: ');
        const titulo = prompt('Título: ');
        const clasificacion = prompt('Clasificación: ');
        const estado = prompt('Estado (disponible/rentada): ');
        const tipo = prompt('Tipo (estreno/catalogo): ');

        const pelicula = { numero, titulo, clasificacion, estado, tipo };
        this.peliculas.push(pelicula);
        console.log('Película registrada con éxito.');
    }

    consultarPeliculas() {
        console.log('Listado de Películas:');
        this.peliculas.forEach(pelicula => {
            console.log(`Película: ${pelicula.titulo}, Estado: ${pelicula.estado}`);
        });
    }

    eliminarPelicula() {
        const numero = prompt('Número de Película a eliminar: ');
        this.peliculas = this.peliculas.filter(pelicula => pelicula.numero !== numero);
        console.log('Película eliminada.');
    }
}

class Renta {
    constructor(clientes, peliculas) {
        this.rentas = [];
        this.clientes = clientes;
        this.peliculas = peliculas;
    }

    rentarPelicula() {
        const numeroCliente = prompt('Número de Membresía del Cliente: ');
        const cliente = this.clientes.find(c => c.numeroMembresia === numeroCliente);

        if (!cliente || cliente.estado === 'deudor') {
            console.log('No se puede rentar. Cliente no encontrado o con deuda.');
            return;
        }

        const numeroPelicula = prompt('Número de Película: ');
        const pelicula = this.peliculas.find(p => p.numero === numeroPelicula && p.estado === 'disponible');

        if (!pelicula) {
            console.log('Película no disponible.');
            return;
        }

        const fechaRenta = new Date();
        const fechaDevolucion = new Date(fechaRenta);
        fechaDevolucion.setDate(fechaDevolucion.getDate() + 3);

        const renta = { cliente, pelicula, fechaRenta: fechaRenta.toLocaleDateString(), fechaDevolucion: fechaDevolucion.toLocaleDateString() };
        this.rentas.push(renta);

        pelicula.estado = 'rentada';
        console.log(`Película rentada con éxito. Devuélvala antes del: ${fechaDevolucion.toLocaleDateString()}`);
    }

    consultarRentas() {
        console.log('Películas Rentadas:');
        this.rentas.forEach(renta => {
            console.log(`Cliente: ${renta.cliente.nombre}, Película: ${renta.pelicula.titulo}, Devolución: ${renta.fechaDevolucion}`);
        });
    }
}


const controlClientes = new Cliente();
const controlPeliculas = new Pelicula();
const controlRentas = new Renta(controlClientes.clientes, controlPeliculas.peliculas);

let opcionMenuPrincipal;

do {
    console.log('\n--- Menú Principal ---');
    console.log('1. Control de Clientes');
    console.log('2. Control de Películas');
    console.log('3. Control de Rentas');
    console.log('4. Salir');
    opcionMenuPrincipal = prompt('Elige una opción: ');

    switch (opcionMenuPrincipal) {
        case '1':
            let opcionClientes;
            do {
                console.log('\n--- Control de Clientes ---');
                console.log('1. Registrar Cliente');
                console.log('2. Consultar Clientes');
                console.log('3. Eliminar Cliente');
                console.log('4. Regresar al Menú Principal');
                opcionClientes = prompt('Elige una opción: ');

                switch (opcionClientes) {
                    case '1':
                        controlClientes.registrarCliente();
                        break;
                    case '2':
                        controlClientes.consultarClientes();
                        break;
                    case '3':
                        controlClientes.eliminarCliente();
                        break;
                    case '4':
                        console.log('Regresando al Menú Principal...');
                        break;
                    default:
                        console.log('Opción no válida.');
                }
            } while (opcionClientes !== '4');
            break;

        case '2':
            let opcionPeliculas;
            do {
                console.log('\n--- Control de Películas ---');
                console.log('1. Registrar Película');
                console.log('2. Consultar Películas');
                console.log('3. Eliminar Película');
                console.log('4. Regresar al Menú Principal');
                opcionPeliculas = prompt('Elige una opción: ');

                switch (opcionPeliculas) {
                    case '1':
                        controlPeliculas.registrarPelicula();
                        break;
                    case '2':
                        controlPeliculas.consultarPeliculas();
                        break;
                    case '3':
                        controlPeliculas.eliminarPelicula();
                        break;
                    case '4':
                        console.log('Regresando al Menú Principal...');
                        break;
                    default:
                        console.log('Opción no válida.');
                }
            } while (opcionPeliculas !== '4');
            break;

        case '3':
            let opcionRentas;
            do {
                console.log('\n--- Control de Rentas ---');
                console.log('1. Rentar Película');
                console.log('2. Consultar Rentas');
                console.log('3. Regresar al Menú Principal');
                opcionRentas = prompt('Elige una opción: ');

                switch (opcionRentas) {
                    case '1':
                        controlRentas.rentarPelicula();
                        break;
                    case '2':
                        controlRentas.consultarRentas();
                        break;
                    case '3':
                        console.log('Regresando al Menú Principal...');
                        break;
                    default:
                        console.log('Opción no válida.');
                }
            } while (opcionRentas !== '3');
            break;

        case '4':
            console.log('Saliendo del sistema...');
            break;

        default:
            console.log('Opción no válida.');
    }
} while (opcionMenuPrincipal !== '4');