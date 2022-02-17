const {Router} = require('express'); //ROUTER para destructurar un objeto y solo obtener lo que se ocupa de el
const { 
    getprecios, 
    postprecios, 
    putprecios, 
    deleteprecios 
} = require('../controllers/precios');
const router = Router(); //Inicializamos la funcion Router

router.get('/', getprecios)
router.post('/', postprecios)
router.put('/', putprecios)
router.delete('/', deleteprecios)            

module.exports = router