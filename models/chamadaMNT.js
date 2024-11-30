const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');
const Cliente = require('./userclientes');  // Importa o modelo Cliente
const EquipesDeManutencao = require('./equipesMNT');  // Importa o modelo EquipesDeManutencao

const ChamadaDeManutencao = sequelize.define('ChamadaDeManutencao', {
  id_manutencao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipoDeManutencao: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  regiaoCliente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  dataManutencao: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  reagendamentoManutencao: {
    type: DataTypes.DATEONLY,
  },
  pagamentoManutencao: {
    type: DataTypes.DECIMAL(10, 2),
  },
  id_Cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,  // Refere-se ao modelo Cliente
      key: 'id_cliente',
    },
    allowNull: false,
  },
  id_equipeManu: {
    type: DataTypes.INTEGER,
    references: {
      model: EquipesDeManutencao,  // Refere-se ao modelo EquipesDeManutencao
      key: 'id_equipesDeManutencao',
    },
    allowNull: false,
  },
});

module.exports = ChamadaDeManutencao;
