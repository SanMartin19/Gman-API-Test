
const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarios');
const ControllerFuncionarios = require('../controllers/funcionarios');

router.get('/funcionarios/' , (req ,res)=>{
    res.send('Rota em bom estado')
})

// Rota para criar um novo funcionário
router.post('/funcionarios/add', ControllerFuncionarios.criaFuncionario)

// // Rota para buscar um funcionário por ID
router.get('/funcionarios/list', ControllerFuncionarios.listarFuncionarios);

// // Rota para atualizar um funcionário
router.put('/funcionarios/editar/:id_funcionario', funcionarioController.editarFuncionarios);

// // Rota para deletar um funcionário
router.delete('/funcionarios/deletar/:id_funcionario', funcionarioController.deletarFuncionario);

module.exports = router;
