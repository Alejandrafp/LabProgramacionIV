const {Router} = require('express'); //ROUTER para destructurar un objeto y solo obtener lo que se ocupa de el
const { 
    getenvios, 
    postenvios, 
    putenvios, 
    deleteenvios 
} = require('../controllers/envios');
const router = Router(); //Inicializamos la funcion Router

router.get('/', getenvios)
router.post('/', postenvios)
router.put('/', putenvios)
router.delete('/', deleteenvios)            

module.exports = router