require('dotenv').config()
// const express = require('express')
// const app = express()


const Server = require('./models/server')
const server = new Server();
server.listen();


// app.get('/', function(req,res){
//     res.send('Hello World')
// })

//app.listen(process.env.PORT)


//¿Si se ejecuta cual es el error?
//No estaba instalado el express

//Convertirlo a funcion flecha
// app.listen(process.env.PORT, function(){
//     console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT)

// })