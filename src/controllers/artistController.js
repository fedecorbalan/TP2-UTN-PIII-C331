const Artist = require('../models/Artist');

/**
 * Crea un nuevo artista en la base de datos.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.body` los datos del artista (`name`, `surname`, etc.).
 * @param {Object} res - Objeto de respuesta. Devuelve el artista creado o un error si la operación falla.
 */
// Crear un autor
exports.createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Obtiene todos los artistas almacenados en la base de datos.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta. Devuelve un array de artistas o un error si la operación falla.
 */
// Leer todos los autores
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Obtiene un artista específico por su ID.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.params.id` el ID del artista a buscar.
 * @param {Object} res - Objeto de respuesta. Devuelve el artista encontrado o un mensaje de error si no se encuentra.
 */
// Leer un autor por ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: 'Autor no encontrado' });
        }
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Elimina un artista por su ID.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.params.id` el ID del artista a eliminar.
 * @param {Object} res - Objeto de respuesta. Devuelve un estado `204` si se elimina correctamente o un error si no se encuentra.
 */
// Eliminar un autor por ID
exports.deleteArtistById = async (req, res) => {
    try {
        const rowsDeleted = await Artist.destroy({ where: { id: req.params.id } });
        if (!rowsDeleted) {
            return res.status(404).json({ error: 'Autor no encontrado' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
