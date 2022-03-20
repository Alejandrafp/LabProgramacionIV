const {Router} = require('express') 
//Uso { Router } para destructurar un objeto y solo obtener lo que ocupo de el 
const router = Router();
//Inicializo la funcion Router
router.get('/', (req, res) => res.send('GET Endpoint para Paquetes'))
router.post('/', (req, res) => res.send('POST Endpoint para Paquetes'))
router.put('/', (req, res) => res.send('PUT Endpoint para Paquetes'))
router.delete('/', (req, res) => res.send('DELETE Endpoint para Paquetes'))

module.exports = router
