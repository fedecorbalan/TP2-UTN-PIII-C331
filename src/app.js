const express = require('express');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();

app.use(express.json());
app.use('/artists', artistRoutes);
app.use('/songs', songRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;
