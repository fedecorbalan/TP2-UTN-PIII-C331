const app = require('./app');
const sequelize = require('./data/db');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    console.log('Conexión a la base de datos exitosa');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}).catch(error => {
    console.error('Error al conectar la base de datos:', error);
});
