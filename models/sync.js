
const Funcionarios = require('./funcionarios.js');
const EquipeMNT = require('./equipesMNT.js')
const clienteModel = require('./cliente.js');
const {FuncioriosGPT} = require('../Insomnia.config/dadosAletorios.js')
const {ClientesGPT} = require('../Insomnia.config/dadosAletorios.js')


// Inicializar as associações

// Sincronizar os modelos com o banco de dados (caso necessário)
clienteModel.sync({ force : true}).then(() => {
  console.log("Modelos sincronizados com sucesso");
}).then(()=>{
  addClienets()
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
}).then(()=>{
  addFuncionarios();
})
.catch(err => {
  console.log("Erro ao sincronizar modelos:", err);
});

 // Importa o modelo Funcionario

// Função para adicionar múltiplos funcionários
async function addFuncionarios() {
  try {
    for (let funcionario of FuncioriosGPT) {
      await Funcionarios.create(funcionario);
    }
    console.log('Todos os funcionários foram adicionados com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar funcionários:', error);
  }
}
async function addClienets() {
  try {
    for (let clientes of ClientesGPT) {
      await clienteModel.create(clientes);
    }
    console.log('Todos os funcionários foram adicionados com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar funcionários:', error);
  }
}

// Chama a função para adicionar os funcionários



module.exports = Funcionarios;