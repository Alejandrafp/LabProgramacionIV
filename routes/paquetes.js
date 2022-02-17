const {Router} = require('express'); //ROUTER para destructurar un objeto y solo obtener lo que se ocupa de el
const { 
    getpaquetes, 
    postpaquetes, 
    putpaquetes, 
    deletepaquetes 
} = require('../controllers/paquetes');
const router = Router(); //Inicializamos la funcion Router

router.get('/', getpaquetes)
router.post('/', postpaquetes)
router.put('/', putpaquetes)
router.delete('/', deletepaquetes)            

module.exports = router