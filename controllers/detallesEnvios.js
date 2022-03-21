const { request, response } = require('express')
const { ListadodetalleEnvios } = require('../models/detallesEnvios');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getdetalleEnvios = (req = request, res = response) => {
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postdetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.creardetalleEnvio(req.body)
    guardarDB(lista.listadoArr,'detalleEnvios')
    res.send('Registro Creado')
}

const putdetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'detalleEnvios')
    res.send('Registro Actualizado')
}
    
const deletedetalleEnvios = (req = request, res = response) =>{
    let lista = new ListadodetalleEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'detalleEnvios')
    res.send('Registro Eliminado')
}
    
module.exports = {
    getdetalleEnvios,
    postdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
}