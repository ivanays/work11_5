const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Social_network', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = { sequelize } ;