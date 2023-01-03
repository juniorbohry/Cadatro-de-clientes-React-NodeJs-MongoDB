const router = require('express').Router();
const ClienteController = require('../controllers/ClienteController')

router.post('/registrar', ClienteController.registrarCliente) //    /
router.get('/', ClienteController.buscarTodosClientes) //    /
router.get('/:id', ClienteController.buscarClientePorId) //    /:id
router.patch('/:id', ClienteController.atualizarClientePorId) //    /:id
router.delete('/:id', ClienteController.removerClientePorId) //    /:id

module.exports = router
