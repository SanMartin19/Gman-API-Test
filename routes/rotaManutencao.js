const express = require('express');
const router = express.Router();
const chamadaController = require('../controllers/chamadaMNT');


// Rota para criar uma chamada de manutenção
router.post('/chamadas/post', chamadaController.createChamadaDeManutencao);

// Rota para buscar todas as chamadas de manutenção
router.get('/chamadas', chamadaController.getAllChamadas);

// Rota para buscar uma chamada de manutenção por ID
router.get('/chamadas/:id', chamadaController.getChamadaById);

// Rota para atualizar uma chamada de manutenção
router.put('/chamadas/:id', chamadaController.updateChamadaDeManutencao);

// Rota para deletar uma chamada de manutenção
router.delete('/chamadas/:id', chamadaController.deleteChamadaDeManutencao);

module.exports = router;


