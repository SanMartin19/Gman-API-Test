const express = require('express');
const router = express.Router();
const ControllerUserClientes = require('../controllers/userclientes');

// Rota para criar um funcionário
router.post('/usercliente/add',ControllerUserClientes.criaUserClientes);

// Rota para buscar todos os funcionários
router.get('/usercliente/list',ControllerUserClientes.listarUserClientes);

// // Rota para buscar um funcionário por ID
// router.get('/usercliente/:id', ControllerUserClientes.);

// Rota para atualizar um funcionário
router.put('/usercliente/edit/:id_cliente', ControllerUserClientes.editarUserClientes);

// Rota para deletar um funcionário
router.delete('/usercliente/delete/:id_cliente', ControllerUserClientes.deletarUserClientes);

module.exports = router;
                                                                                