const express = require("express");
const app = express();
const port = 3380;

const path = require("path"); 

const rotaFuncionarios = require("./routes/rotaFuncionarios")

const {connectToDataBase } = require("./config/config");

app.get('/' , (res ,req)=>{
    req.send("Teste")
})
app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));

app.use('/', rotaFuncionarios);

app.listen(port, ()=>{
    connectToDataBase()
    console.log(`Servidor ouvindo na porta ${port}`);
});