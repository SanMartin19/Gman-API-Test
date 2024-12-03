const  Sequelize  = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', // Dialeto para SQL Server
  host: 'localhost', // Endereço do servidor do banco de dados
  username: 'root', // Nome do usuário
  password: 'UserAdmin123', // Senha
  database: 'GMANTESTE', // Nome do banco de dados
  options: {
    encrypt: true, // Usado para conexão criptografada
    trustServerCertificate: true, // Importante para o ambiente de desenvolvimento
  },
});
function connectToDataBase() {
    sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

}
// Testar a conexão com o banco de dados
module.exports = { sequelize, Sequelize, connectToDataBase };


