const { DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');
const Artist = require('./Artist');

/**
 * Modelo `Song` para la tabla de canciones en la base de datos.
 * 
 * Este modelo define los campos y sus propiedades:
 * - `id`: Identificador único de la canción (clave primaria, autoincremental).
 * - `title`: Título de la canción (campo obligatorio).
 * - `genre`: Género musical de la canción (campo obligatorio).
 * - `status`: Estado de la canción (`active` o `inactive`, con valor predeterminado `active`).
 * - `createdAt`: Fecha de creación del registro (valor predeterminado es la fecha/hora actual).
 * - `updatedAt`: Fecha de la última actualización del registro (valor predeterminado es la fecha/hora actual).
 */


const Song = sequelize.define('Song', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' },
    createdAt: { type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
});

/**
 * Relación entre modelos:
 * - Un artista (`Artist`) puede tener muchas canciones (`Song`).
 * - Cada canción (`Song`) pertenece a un único artista (`Artist`).
 */

Artist.hasMany(Song, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

module.exports = Song;
