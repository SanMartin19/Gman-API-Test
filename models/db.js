const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//   dialect: 'mysql', // Dialeto para SQL Server
//   host: 'localhost', // Endereço do servidor do banco de dados
//   username: 'root', // Nome do usuário
//   password: 'UserAdmin123', // Senha
//   database: 'GMANTESTE', // Nome do banco de dados
//   options: {
//     encrypt: true, // Usado para conexão criptografada
//     trustServerCertificate: true, // Importante para o ambiente de desenvolvimento
//   },
// });

// // Testar a conexão com o banco de dados
// sequelize.authenticate()
//   .then(() => {
//     console.log('aaaConexão com o banco de dados foi bem-sucedida!');
//   })
//   .catch((err) => {
//     console.error('Erro ao conectar com o banco de dados:', err);
//   });

module.exports = sequelize;
