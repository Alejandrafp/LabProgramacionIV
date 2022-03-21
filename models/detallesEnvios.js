const { v4: uuidv4 } = require('uuid');

class detalleEnvios {
    constructor(id,idEnvio, idPaquete) {
        this.id = id
        this.idEnvio = idEnvio
        this.idPaquete = idPaquete
       
    }
}

class ListadodetalleEnvios {
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
        datos.forEach(detalleenvio => {
            this._listado[detalleenvio.id] = detalleenvio;
        });
    }

    creardetalleEnvio(datos) {
        const detalleenvio = new detalleEnvios(
            datos.id,
            datos.idEnvio,
            datos.idPaquete );
        this._listado[detalleenvio.id] = detalleenvio;
    }
}

module.exports = {
    ListadodetalleEnvios
}