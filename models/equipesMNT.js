const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');  // Importa a configuração do Sequelize

const EquipesDeManutencao = sequelize.define('EquipesDeManutencao', {
  id_equipesDeManutencao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  regiaoEquipe: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  supervisorEquipe: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  statusEquipe: {
    type: DataTypes.STRING(50),
    defaultValue: 'Ativa',
    allowNull: false,
  },
  numMembrosEquipe: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = EquipesDeManutencao;
