const {request, response} = require('express')

const getpaquetes = (req = request, res = response) =>{
    res.send('GET Enpoint para Paquetes')
}

const postpaquetes = (req = request, res = response) =>{
    res.send('POST Enpoint para Paquetes')
}


const putpaquetes = (req = request, res = response) =>{
    res.send('PUT Enpoint para Paquetes')
}


const deletepaquetes = (req = request, res = response) =>{
    res.send('DELETE Enpoint para Paquetes')
}

module.exports ={
    getpaquetes,
    postpaquetes,
    putpaquetes,
    deletepaquetes
}