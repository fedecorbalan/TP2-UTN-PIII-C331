const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/artists', artistRoutes); // Rutas para artistas
app.use('/songs', songRoutes); // Rutas para canciones

// Sincronizar la base de datos y arrancar el servidor
sequelize
.sync({ alter: true }) // Cambiar a `force: true` solo para desarrollo (elimina y recrea tablas)
.then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
.catch((error) => console.error('Error al sincronizar la base de datos:', error));
