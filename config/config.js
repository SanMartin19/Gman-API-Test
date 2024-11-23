const express = require("express");
const app = express();


const sequelize = require("sequelize");
const sequelize = new sequelize('Gman', 'sa', 'UserAdmin123',{
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
module.exports = {sequelize, connectToDatabase};

