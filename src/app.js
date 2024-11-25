const express = require('express');
const bodyParser = require('body-parser');
// // const cors = require('cors');
const { sequelize } = require('./data/db.js');
const artistRoutes = require('./routes/artistRoutes');
const songRoutes = require('./routes/songRoutes');

const app = express();
// // const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
sequelize
.authenticate()
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch((error) => console.error('Error al conectar con la base de datos:', error));
