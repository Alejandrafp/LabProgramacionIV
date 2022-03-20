const { Router } = require('express');
const {
    getDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
} = require('../controllers/detallesEnvios');

const router = Router();

router.get('/', getDetallesEnvios)
router.post('/', postDetallesEnvios)
router.put('/', putDetallesEnvios)
router.delete('/', deleteDetallesEnvios)

module.exports = router
