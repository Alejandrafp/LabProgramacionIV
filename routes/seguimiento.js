const {Router} = require('express'); //ROUTER para destructurar un objeto y solo obtener lo que se ocupa de el
const { 
    getseguimiento, 
    postseguimiento, 
    putseguimiento, 
    deleteseguimiento 
} = require('../controllers/seguimiento');
const router = Router(); //Inicializamos la funcion Router

router.get('/', getseguimiento)
router.post('/', postseguimiento)
router.put('/', putseguimiento)
router.delete('/', deleteseguimiento)            

module.exports = router