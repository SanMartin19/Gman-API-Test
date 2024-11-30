const express = require("express");
const app = express();
const port = 3000;

const path = require("path"); 

const rotaManutencao = require("./routes/rotaManutencao");

const {connectToDataBase } = require("./config/config");
connectToDataBase();

app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', rotaManutencao);

app.listen(port, ()=>{
    console.log(`Servidor ouvindo na porta ${port}`);
});