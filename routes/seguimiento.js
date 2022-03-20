const {Router} = require('express') 
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupo de el 
const router = Router();
//Inicializo la funcion Router
router.get('/', (req, res) => res.send('GET Endpoint para Seguimiento'))
router.post('/', (req, res) => res.send('POST Endpoint para Seguimiento'))
router.put('/', (req, res) => res.send('PUT Endpoint para Seguimiento'))
router.delete('/', (req, res) => res.send('DELETE Endpoint para Seguimiento'))

module.exports = router
