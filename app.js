const express = require("express");
const path = require('path');
const GmanRoute = require('./route.js');
const app = express();

const {conectToDataBase } = require("./config");
conectToDataBase();

const port = 3000;

app.use(express.static(path.join(__dirname)));

app.use(express.json());

app.use('/', GmanRoute);

app.listen(port, () => {
    console.log(`Servidor respondendo na porta ${port}`);
});