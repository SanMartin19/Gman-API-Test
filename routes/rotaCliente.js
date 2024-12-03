const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

// Rota para criar um funcionário
router.post('/funcionarios',funcionarioController.createFuncionario);

// Rota para buscar todos os funcionários
router.get('/funcionarios',funcionarioController.getAllFuncionarios);

// Rota para buscar um funcionário por ID
router.get('/funcionarios/:id', funcionarioController.getFuncionarioById);

// Rota para atualizar um funcionário
router.put('/funcionarios/:id', funcionarioController.updateFuncionario);

// Rota para deletar um funcionário
router.delete('/funcionarios/:id', funcionarioController.deleteFuncionario);

module.exports = router;
