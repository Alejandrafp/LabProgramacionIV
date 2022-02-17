const {request, response} = require('express')

const getprecios = (req = request, res = response) =>{
    res.send('GET Enpoint para Precios')
}

const postprecios = (req = request, res = response) =>{
    res.send('POST Enpoint para Precios')
}


const putprecios = (req = request, res = response) =>{
    res.send('PUT Enpoint para Precios')
}


const deleteprecios = (req = request, res = response) =>{
    res.send('DELETE Enpoint para Precios')
}

module.exports ={
    getprecios,
    postprecios,
    putprecios,
    deleteprecios
}