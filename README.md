# Sistema de Gestión Musical :notes:

Este proyecto es una API construida con **Node.js**, **Express**, y **Sequelize**, diseñada para gestionar artistas y canciones en una base de datos **MySQL**.

## Características
- Crear, leer (todos o con ID) y eliminar (por ID) artistas.
- Crear, leer, actualizar (por ID) y eliminar canciones asociadas a artistas (por ID).
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
   node src/server.js
   ```

- Lo que va a hacer eso, es inicializar el servidor en el puerto especificado dentro del codigo, en este caso:
  ```bash
   http://localhost:3000/
   ```
  y ademas, tambien inicializara los atributos proporcionados en los modelos de las entidades, en la base de datos, creando sus respectivas tablas.

- Posteriormente y para poder probar esto, dentro de la carpeta data, se encuentran los archivos .json que sirven para poder inyectar los datos en la DB. Se precisa de ejecutar primero el artists.json y luego el songs.json. (Advertencia, por favor, insertar los json de a una llave, ya que por razones que desconozco, no me deja inyectar el json entero de una. Mil disculpas por eso.)

- Con esto ya podrias realizar las peticiones, que en mi caso, realize en el Postman...

## **Ejemplos de Endpoints**

### **1. Obtener todos los artistas.**
- **Método**: GET
- **Ruta**: `/artists`
- **Descripción**: Trae a todos los artistas.
  
  **Ejemplo de Request**:
  ```http
  GET http://localhost:3000/artists
  ```

### **2. Obtener todas las canciones.**
- **Método**: GET
- **Ruta**: `/songs`
- **Descripción**: Trae a todas las canciones.
  
  **Ejemplo de Request**:
  ```http
  GET http://localhost:3000/songs
  ```

### **3. Crear Artista**
- **Método**: POST
- **Ruta**: `/artists`
- **Descripción**: Crea un artista en base a los parametros indicados, en este caso, los esenciales son name y surname, el resto son de aplicacion automatica pero pueden ser manipulados, por ejemplo, se pueden modificar las fechas.
  
  **Ejemplo de Request**:
  ```http
  POST http://localhost:3000/artists
  Body:
  {
    "name": "Paul",
    "surname": "McCartney"
  }
  Respuesta Esperada:
  {
    "id": 9,
    "name": "Paul",
    "surname": "McCartney",
    "createdAt": "2024-11-25T00:00:00.000Z",
    "updatedAt": "2024-11-25T00:00:00.000Z"
  }
  ```
### **4. Crear Canción**
- **Método**: POST
- **Ruta**: `/songs`
- **Descripción**: .
  
  **Ejemplo de Request**:
  ```http
  POST http://localhost:3000/songs
  Body:
  {
    "title": "Band on the Run",
    "genre": "Rock",
    "artistId": 9
  }
  Respuesta Esperada:
  {
    "id": 2,
    "title": "Band on the Run",
    "genre": "Rock",
    "status": "active",
    "artistId": 9,
    "createdAt": "2024-11-25T00:00:00.000Z",
    "updatedAt": "2024-11-25T00:00:00.000Z"
  }
  ```
### **5. Obtener una cancion por id.**
- **Método**: GET
- **Ruta**: `/songs/:id`
- **Descripción**: Trae la cancion por su numero de ID.

**Ejemplo de Request**:
```http
GET http://localhost:3000/songs/13
```
### **6. Actualizar una cancion por id.**
- **Método**: PUT
- **Ruta**: `/songs/:id`
- **Descripción**: Actualiza la cancion por su numero de ID.

**Ejemplo de Request**:
```http
PUT http://localhost:3000/songs/2
Body:
{
    "title": "Nobody Knows",
    "genre": "Rock",
    "status": "inactive"
}
Respuesta Esperada:
{
    "id": 2,
    "title": "Nobody Knows",
    "genre": "Pop",
    "status": "inactive",
    "artistId": 9,
    "createdAt": "2024-11-25T00:00:00.000Z",
    "updatedAt": "2024-11-25T00:00:00.000Z"
}
```
### **7. Eliminar una cancion por id.**
- **Método**: DELETE
- **Ruta**: `/songs/:id`
- **Descripción**: Actualiza la cancion por su numero de ID.

**Ejemplo de Request**:
```http
DELETE http://localhost:3000/songs/2

Respuesta esperada:
{
    "message": "Canción eliminada con éxito."
}
```

### **8. Eliminar una cancion por id.**
- **Método**: DELETE
- **Ruta**: `/artists/:id`
- **Descripción**: Actualiza la cancion por su numero de ID.

**Ejemplo de Request**:
```http
DELETE http://localhost:3000/artists/2

Respuesta esperada:
{
    "message": "Artista eliminado con éxito."
}
```

### **9. Leer registros mediante QueryParams.**
- **Método**: GET
- **Ruta**: `/songs/songs?page=x&limit=x&sort=DESC&genre=&status=active/inactive`
- **Descripción**: Trae canciones en base a los parametros ingresados, en este caso, page, limit (hasta 10), un sort que puede ser solo ASC o DESC, y el status, que solo puede ser active o inactive.

**Ejemplo de Request**:
```http
GET http://localhost:3000/songs/songs?page=1&limit=5&sort=DESC&genre=&status=inactive
```
# Notas #
- Asegúrate de que MySQL esté en ejecución y que la base de datos musicaldbutn esté creada antes de iniciar el servidor.

- Puedes modificar el puerto del servidor o la configuración de la base de datos según sea necesario.

# Autor #

- Proyecto desarrollado por Federico Corbalán, ante cualquier duda o consulta, no dude en ponerse en contacto. 2024.


