const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Artist = require('./Artist');

const Song = sequelize.define('Song', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    releaseDate: { type: DataTypes.DATE, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false } // Duración en segundos
});

Artist.hasMany(Song, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

module.exports = Song;
