const sequelize = require('./db.js');
const Cliente = require('./userclientes.js');
const EquipesDeManutencao = require('./equipesMNT.js');
const Funcionarios = require('./funcionarios.js');
const ChamadaDeManutencao = require('./chamadaMNT.js');

sequelize.sync({ force: true })  // Isso recriará as tabelas no banco
  .then(() => {
    console.log('Tabelas sincronizadas!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar as tabelas:', err);
  });

  module.exports = {Cliente , EquipesDeManutencao , Funcionarios , ChamadaDeManutencao}
