# Sistema de Gestión Musical

Este proyecto es una API construida con **Node.js**, **Express**, y **Sequelize**, diseñada para gestionar artistas y canciones en una base de datos **MySQL**.

## Características
- Crear, leer y eliminar artistas.
- Crear, leer, actualizar (por ID )y eliminar canciones asociadas a artistas (por ID).
- Relaciones entre artistas y canciones gestionadas mediante Sequelize.
- Manejo de errores y respuestas claras al cliente.

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para construir la API.
- **Sequelize**: ORM para interactuar con la base de datos.
- **MySQL**: Base de datos relacional.

---

## Requisitos previos para poder ejecutar el proyecto localmente

- Node.js
- MySQL (con MySQL Workbench para administrar la base de datos).
- En el mismo MySQL, crear una base de datos llamada "musicaldbutn", para luego poder inyectar los datos.

## Instrucciones de ejecución.

- Una vez creada la base de datos en el motor SQL, iniciar el servidor:
   ```bash
   node src/server.
   ```


