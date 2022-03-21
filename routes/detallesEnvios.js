const { Router } = require('express');
const {
    getdetalleEnvios,
    postdetalleEnvios,
    putdetalleEnvios,
    deletedetalleEnvios
} = require('../controllers/detallesEnvios');

const router = Router();

router.get('/', getdetalleEnvios)
router.post('/', postdetalleEnvios)
router.put('/:id', putdetalleEnvios)
router.delete('/:id', deletedetalleEnvios)

module.exports = router
