const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: 'localhost',
  username: 'sa', // Substitua com seu usuário
  password: 'UserAdm123', // Substitua com sua senha
  database: 'Gman', // Substitua com o nome do seu banco
  options: {
    encrypt: true, // Se você estiver usando conexão criptografada
    trustServerCertificate: true, // Se você estiver em ambiente de desenvolvimento
  },
});

module.exports = sequelize