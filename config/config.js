const express = require("express");
const app = express();


const Sequelize = require("sequelize");
const sequelize = new Sequelize('Gman', 'sa', 'UserAdm123',{
    dialect: 'mssql',
    dialectModule: require('tedious'),
    host:'localhost',
    port: 1433
}); 
const connectToDataBase = async() =>{
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizado com sucesso.');

    } catch (err) {
        console.log(`Erro ao conectar com o banco de dados: ${err} `);
    }
};
module.exports = {sequelize, connectToDataBase};

