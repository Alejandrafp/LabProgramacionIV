const {request, response} = require('express');
const { ListadoEnvios } = require('../models/envios');

const getenvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postenvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req,body)
    guardarDB(lista.listadoArr,'envios')
    res.send('Registro Creado')
}


// const postenvios = (req = request, res = response) =>{
//     res.send('POST Enpoint para Envios')
// }


// const putenvios = (req = request, res = response) =>{
//     res.send('PUT Enpoint para Envios')
// }


// const deleteenvios = (req = request, res = response) =>{
//     res.send('DELETE Enpoint para Envios')
// }

module.exports ={
    ListadoEnvios,
    getenvios,
    postenvios,
    putenvios,
    deleteenvios
}