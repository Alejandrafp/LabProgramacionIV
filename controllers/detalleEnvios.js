const {request, response} = require('express')

const getdetalleEnvios = (req = request, res = response) =>{
    res.send('GET Enpoint para Detalles Envios')
}

const postdetalleEnvios = (req = request, res = response) =>{
    res.send('POST Enpoint para Detalles Envios')
}


const putdetalleEnvios = (req = request, res = response) =>{
    res.send('PUT Enpoint para Detalles Envios')
}


const deletedetalleEnvios = (req = request, res = response) =>{
    res.send('DELETE Enpoint para Detalles Envios')
}

module.exports ={
    getdetalleEnvios,
    postdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
}