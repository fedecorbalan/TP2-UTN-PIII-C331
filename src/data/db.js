const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('musicaldbutn', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = sequelize;
