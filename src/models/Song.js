const { DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');
const Artist = require('./Artist');

const Song = sequelize.define('Song', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    genre: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' },
    createdAt: { type: DataTypes.DATE, allowNull: false,defaultValue: DataTypes.NOW },
    updatedAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW}
});

Artist.hasMany(Song, { foreignKey: 'artistId', onDelete: 'CASCADE' });
Song.belongsTo(Artist, { foreignKey: 'artistId' });

module.exports = Song;
