const express = require("express");
const router = express.Router();

const GmanController = require("../controllers/controller");

router.get("/", GmanController.clienteController.index);

module.exports = {router};