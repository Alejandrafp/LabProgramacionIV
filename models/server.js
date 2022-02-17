const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express()
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.routes();
    }

    routes(){
       this.app.use('/precios', require('../routes/precios'))
       this.app.use('/detalleEnvios', require('../routes/detalleEnvios'))
       this.app.use('/envios', require('../routes/envios'))
       this.app.use('/paquete', require('../routes/paquete'))
       this.app.use('/seguimiento', require('../routes/seguimiento'))
             
    }

    listen(){
        this.app.listen(process.env.PORT,()=>
        console.log("El puerto esta corriendo en el puerto TCP" + process.env.PORT))
        
    }

}

module.exports = Server


//Que es this?
//como un atajo que refiere al objeto desde donde se invocó la función. 
//Que es module.exports?
//para hacer nuestro código mas modular, y limpiar un poco nuestro archivo app. js, los module exports funcionan como funciones, pero con archivos. 
