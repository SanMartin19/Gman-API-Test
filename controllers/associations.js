// Importa os modelos
const Cliente = require('./cliente');  // Exemplo de modelo Cliente
const EquipesDeManutencao = require('./equipesMNT');  // Exemplo de modelo de Equipe de Manutenção
const Funcionarios = require('./funcionarios');  // Exemplo do modelo Funcionarios

// Estabelece as associações
const initAssociations = () => {
  // Relacionamento entre Funcionario e EquipeDeManutencao
  Funcionarios.belongsTo(EquipesDeManutencao, {
    foreignKey: 'idEquipeFuncionario',
    as: 'equipe', // Nome do alias para acessar a equipe
  });

  EquipesDeManutencao.hasMany(Funcionarios, {
    foreignKey: 'idEquipeFuncionario',
    as: 'funcionarios', // Nome do alias para acessar os funcionários da equipe
  });

  // Exemplo de associação entre Cliente e ChamadaDeManutencao, se necessário
  // ChamadaDeManutencao.belongsTo(Cliente, {
  //   foreignKey: 'id_Cliente',
  //   as: 'cliente', 
  // });
};

module.exports = initAssociations;
