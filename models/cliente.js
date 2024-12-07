const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config.js");

const clienteModel = sequelize.define("Cliente", {
  id_cliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco_cliente:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  telefone_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  login_cliente:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  cartao_cliente:{
    type:DataTypes.STRING,
    allowNull: false
  },
 
}, {
  tableName: "Cliente",
  timestamps: false // Caso você não utilize os campos 'createdAt' e 'updatedAt'
});

module.exports = clienteModel;
