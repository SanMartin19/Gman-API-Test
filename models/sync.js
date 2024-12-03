
const Funcionarios = require('./funcionarios.js');



// Inicializar as associações

// Sincronizar os modelos com o banco de dados (caso necessário)


Funcionarios.sync({ force : true}).then(() => {
  console.log("Modelos sincronizados com sucesso");
})
.catch(err => {
  console.log("Erro ao sincronizar modelos:", err);
});

module.exports = Funcionarios;