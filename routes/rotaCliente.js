const express = require("express");
const router = express.Router();

const GmanController = require("../controllers/controller");

router.put("/criarCliente", GmanController.clienteController.criarCliente);

router.post("/editarCliente/:email_cliente/:cliente_senha/:cliente_telefone/:cliente_endereco/:cliente_cartao", GmanController.clienteController.editarCliente);

router.get("/listarClientes", GmanController.clienteController.listarCliente);

router.delete("/deletarCliente/:id_cliente", GmanController.clienteController.deletarCliente);


module.exports = { router };


// email, cliente_senha, cliente_telefone, cliente_endereco, cliente_cartao 