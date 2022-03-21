const { v4: uuidv4 } = require('uuid');

class Precios {
    constructor(id,cantidad, valor, estado) {
        this.id = id
        this.cantidad = cantidad
        this.valor = valor
        this.estado = estado
        
    }
}

class ListadoPrecios {
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

    crearPrecio(datos) {
        const envio = new Precios(
            datos.cantidad,
            datos.valor,
            datos.estado );
        this._listado[envio.id] = envio;
    }
}

module.exports = {
    ListadoPrecios
}