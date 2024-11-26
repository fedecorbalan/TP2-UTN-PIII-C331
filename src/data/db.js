const { Sequelize } = require('sequelize');

/**
 * Configuración de la conexión a la base de datos utilizando Sequelize.
 * 
 * - Base de datos: `musicaldbutn`
 * - Usuario: `root`
 * - Contraseña: `root` En mi caso, requiero contrasena por mi configuracion de MySql, pero modificar en caso de no tener contrasena para su usuario de MySql
 * - Host: `localhost`
 * - Puerto: `3307` en mi caso, pero modificar en caso de ser necesario a su puerto de MySql.
 * - Dialecto: `mysql`
 */

const sequelize = new Sequelize('musicaldbutn', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
});

module.exports = sequelize;
