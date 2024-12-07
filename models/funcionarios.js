const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/config');
const EquipesDeManutencao = require('./equipesMNT.js');  // Importa o modelo da equipe

const Funcionarios = sequelize.define('Funcionarios', {
  id_funcionario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome_funcionario: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  funcao_funcionario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefone_funcionario: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  email_funcionario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  senha_funcionario: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  idEquipeFuncionario: {
    type: DataTypes.INTEGER,
    references: {
      model: EquipesDeManutencao,  // Refere-se ao modelo de EquipesDeManutencao
      key: 'id_equipesDeManutencao',
  }},
  },
);


module.exports = Funcionarios;
