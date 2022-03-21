const { v4: uuidv4 } = require('uuid');

class Seguimiento {
    constructor(id,fecha, hora, lugar) {
        this.id = id
        this.fecha = fecha
        this.hora = hora
        this.lugar = lugar
        
    }
}

class ListadoSeguimiento {
    constructor() {
        this._listado = {};
    }
//POO
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    cargarTareasFromArray(datos = []) {
        datos.forEach(envio => {
            this._listado[envio.id] = envio;
        });
    }

    crearSeguimiento(datos) {
        const envio = new Seguimiento(
            datos.fecha,
            datos.hora,
            datos.lugar );
        this._listado[envio.id] = envio;
    }
}

module.exports = {
    ListadoSeguimiento
}