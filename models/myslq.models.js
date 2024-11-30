const { Sequelize, DataTypes } = require("sequelize");

// Criação da conexão com o banco de dados MySQL
const sequelize = new Sequelize("Gman", "sa", "UserAdm123", {
    host: "localhost",
    dialect: "mssql",
  });

// Modelo Cliente
const cliente = sequelize.define(
  "cliente_gman",
  {
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,  // Obrigatório
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,  // Obrigatório
      unique: true,  // Garantir que o email seja único
    },
    cliente_senha: {
      type: DataTypes.STRING(255),
      allowNull: false,  // Obrigatório
    },
    cliente_telefone: {
      type: DataTypes.STRING(15),
      allowNull: false,  // Obrigatório
    },
    cliente_endereco: {
      type: DataTypes.STRING(255),
      allowNull: false,  // Obrigatório
    },
    cliente_cartao: {
      type: DataTypes.STRING(20),
      allowNull: false,  // Obrigatório
    },
  },
  {
    timestamps: true,  // Adiciona os campos createdAt e updatedAt automaticamente
    tableName: "cliente_gman",  // Nome da tabela no banco de dados
  }
);

// Modelo Funcionário
const funcionario = sequelize.define("fucionario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,  // Obrigatório
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,  // Obrigatório
  },
  fucionario_email: {
    type: DataTypes.STRING(100),
    allowNull: false,  // Obrigatório
    unique: true,  // Garantir que o email seja único
  },
  fucionario_senha: {
    type: DataTypes.STRING(255),
    allowNull: false,  // Obrigatório
  },
  fucionario_telefone: {
    type: DataTypes.STRING,
    allowNull: false,  // Obrigatório
  },
  data_admissao: {
    type: DataTypes.DATE,
    allowNull: false,  // Obrigatório
  },
});

// Modelo Equipes de Manutenção
const equipes_manutencao = sequelize.define("equipes_manutencao", {
  regiao_equipe: {
    type: DataTypes.STRING,
    allowNull: false,  // Obrigatório
  },
  superviso_equipe: {
    type: DataTypes.STRING,
    allowNull: false,  // Obrigatório
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,  // Obrigatório
  },
  num_mebros_equipes: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Obrigatório
  },
}, {
  timestamps: true,  // Adiciona os campos createdAt e updatedAt automaticamente
  tableName: "equipes_manutencao",  // Nome da tabela no banco de dados
});
function createtable(){
  cliente.sync({force: true})
  equipes_manutencao.sync({force: true})
  funcionario.sync({force: true})
}
createtable()
module.exports = { cliente, funcionario, equipes_manutencao , createtable };

