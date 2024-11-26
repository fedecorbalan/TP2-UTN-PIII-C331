const { DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

/**
 * Modelo `Artist` para la tabla de artistas en la base de datos.
 * 
 * Este modelo define los campos y sus propiedades:
 * - `id`: Identificador único del artista (clave primaria, autoincremental).
 * - `name`: Nombre del artista (campo obligatorio).
 * - `surname`: Apellido del artista (campo obligatorio).
 * - `createdAt`: Fecha de creación del registro (valor predeterminado es la fecha/hora actual).
 * - `updatedAt`: Fecha de la última actualización del registro (valor predeterminado es la fecha/hora actual).
 */

const Artist = sequelize.define('Artist', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: {type: DataTypes.STRING, allowNull: false},
    createdAt: { type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
});

module.exports = Artist;
