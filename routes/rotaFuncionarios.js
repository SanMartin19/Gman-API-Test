const express = require("express");
const router = express.Router();

const GmanController = require("../controllers/controller");

router.put("/criarFuncionario", GmanController.funcionarioController.criarFuncionario);

router.post("/editarFuncionario/:nome_funcionario/:cargo_funcionario/:funcionario_email/:funconario_senha/:funcionario_telefone/:data_admissao", GmanController.funcionarioController.editarFuncionarios);

router.get("/listarFuncionario", GmanController.funcionarioController.listarFuncionario);

router.delete("/deletarFuncionario/:id_funcionario", GmanController.funcionarioController.deletarFuncionario);

module.exports = { router };

