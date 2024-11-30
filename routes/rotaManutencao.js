const express = require('express');
const router = express.Router();

const GmanController = require("../controllers/controller");


//router.post("criarEquipeManutencao", GmanController.teamController.criarEquipeManutencao);

router.get("/listarEquipeManutencao", GmanController.teamController.listarEquipesDeManutencao);

//router.put("/editarEquipeManutencao/:id_equipeManutencao", GmanController.teamController.listarEquipesManutencao);

//router.delete("/deletarEquipeManutencao/:id_equipeManutencao", GmanController.teamController.deletarEquipeManutencao);

module.exports = router;


