const express = require('express');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express(); // Crea una instancia de la aplicación Express.

app.use(express.json()); // Middleware para procesar solicitudes con cuerpo en formato JSON.

/**
 * Rutas principales de la aplicación:
 * 
 * - `/artists`: Maneja todas las operaciones relacionadas con los artistas (definidas en artistRoutes).
 * - `/songs`: Maneja todas las operaciones relacionadas con las canciones (definidas en songRoutes).
 */
app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

/**
 * Middleware para manejar rutas no definidas:
 * Si ninguna de las rutas anteriores coincide con la solicitud, devuelve un error 404.
 */

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;
