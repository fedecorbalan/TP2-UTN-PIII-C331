const app = require('./app'); // Importa la instancia de la aplicación Express.
const sequelize = require('./data/db');

const PORT = process.env.PORT || 3000; // Define el puerto para el servidor, tomando el valor del entorno o 3000 por defecto.

// Intenta sincronizar la base de datos con el modelo definido en Sequelize.
sequelize.sync({ force: false }).then(() => { // `force: false` asegura que no se eliminen ni creen las tablas de nuevo en cada reinicio.
    console.log('Conexión a la base de datos exitosa');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Error al conectar la base de datos:', error);
});
