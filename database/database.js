const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','adm','123',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;