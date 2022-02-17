const {request, response} = require('express')

const getseguimiento = (req = request, res = response) =>{
    res.send('GET Enpoint para Seguimiento')
}

const postseguimiento = (req = request, res = response) =>{
    res.send('POST Enpoint para Seguimiento')
}


const putseguimiento = (req = request, res = response) =>{
    res.send('PUT Enpoint para Seguimiento')
}


const deleteseguimiento = (req = request, res = response) =>{
    res.send('DELETE Enpoint para Seguimiento')
}

module.exports ={
    getseguimiento,
    postseguimiento,
    putseguimiento,
    deleteseguimiento
}