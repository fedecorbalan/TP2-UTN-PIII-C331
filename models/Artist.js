const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false }
});

module.exports = Artist;
