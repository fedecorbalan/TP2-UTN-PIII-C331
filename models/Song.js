const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Song = sequelize.define('Song', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    releaseDate: { type: DataTypes.DATE, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false } // Duración en segundos
});

module.exports = Song;
