
const Funcionarios = require('./funcionarios.js');
const EquipeMNT = require('./equipesMNT.js')
const clienteModel = require('./cliente.js');


// Inicializar as associações

// Sincronizar os modelos com o banco de dados (caso necessário)
clienteModel.sync({ force : true}).then(() => {
  console.log("Modelos sincronizados com sucesso");
})
.catch(err => {
  console.log("Erro ao sincronizar modelos:", err);
});

EquipeMNT.sync({ force : true}).then(() => {
  console.log("Modelos sincronizados com sucesso");
})
.catch(err => {
  console.log("Erro ao sincronizar modelos:", err);
});


Funcionarios.sync({ force : true}).then(() => {
  console.log("Modelos sincronizados com sucesso");
})
.catch(err => {
  console.log("Erro ao sincronizar modelos:", err);
});

module.exports = Funcionarios;