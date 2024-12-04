const express = require('express');
const router = express.Router();
const ControllerEuqipeMNT = require('../controllers/chamadaMNT');


// Rota para criar uma chamada de manutenção
router.post('/chamadas/post', ControllerEuqipeMNT.criarEquipeMNT);

// Rota para buscar todas as chamadas de manutenção
router.get('/chamadas/list', ControllerEuqipeMNT.listarEquipeMNT);

// Rota para buscar uma chamada de manutenção por ID
// router.get('/chamadas/:id', chamadaController.getChamadaById);

// Rota para atualizar uma chamada de manutenção
router.put('/chamadas/editar/:id_equipesDeManutencao', ControllerEuqipeMNT.editarEquipeMNT);

// // Rota para deletar uma chamada de manutenção
router.delete('/chamadas/deletar/:id_equipesDeManutencao', ControllerEuqipeMNT.deletarEquipeMNT);

module.exports = router;


