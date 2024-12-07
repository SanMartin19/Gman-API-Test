const express = require("express");
const app = express();
const port = 3380;

const path = require("path"); 
const rotaChamadaMNT =  require("./routes/rotaManutencao")
const rotaFuncionarios = require("./routes/rotaFuncionarios")
const rotaUserClientes = require("./routes/clienteRoutes")
const {connectToDataBase } = require("./config/config");

app.get('/' , (res ,req)=>{
    req.send("Teste")
})
app.use(express.json());

app.use(express.static(path.join(__dirname,"/views")));
app.use('/' , rotaChamadaMNT)
app.use('/', rotaFuncionarios);
app.use('/' , rotaUserClientes)

app.listen(port, ()=>{
    connectToDataBase()
    console.log(`Servidor ouvindo na porta ${port}`);
});