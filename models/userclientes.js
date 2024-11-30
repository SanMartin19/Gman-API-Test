const { DataTypes } = require('sequelize');
const sequelize = require('./db.js');  // Importa a configuração do Sequelize

const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome_cliente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  endereco_cliente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  telefone_cliente: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
  email_cliente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  login_cliente: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cartao_cliente: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },
});

module.exports = Cliente;
