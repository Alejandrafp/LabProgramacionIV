const {Router} = require('express'); //ROUTER para destructurar un objeto y solo obtener lo que se ocupa de el
const { 
    getdetalleEnvios, 
    postdetalleEnvios, 
    putdetalleEnvios, 
    deletedetalleEnvios 
} = require('../controllers/detalleEnvios');
const router = Router(); //Inicializamos la funcion Router

router.get('/', getdetalleEnvios)
router.post('/', postdetalleEnvios)
router.put('/', putdetalleEnvios)
router.delete('/', deletedetalleEnvios)            

module.exports = router