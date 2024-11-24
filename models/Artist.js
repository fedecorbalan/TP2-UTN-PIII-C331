const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: {type: DataTypes.STRING, allowNull: false},
    createdAt: { type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
});

module.exports = Artist;
