const Song = require('../models/Song');

/**
 * Crea una nueva canción en la base de datos.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.body` los datos de la canción (`title`, `genre`, `artistId`, etc.).
 * @param {Object} res - Objeto de respuesta. Devuelve la canción creada o un error si la operación falla.
 */
exports.createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Obtiene todas las canciones almacenadas en la base de datos.
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta. Devuelve un array de canciones o un error si la operación falla.
 */
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Obtiene una canción específica por su ID.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.params.id` el ID de la canción a buscar.
 * @param {Object} res - Objeto de respuesta. Devuelve la canción encontrada o un mensaje de error si no se encuentra.
 */
exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findByPk(req.params.id);
        if (!song) {
            return res.status(404).json({ error: 'Canción no encontrada' });
        }
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Actualiza los datos de una canción por su ID.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.params.id` el ID de la canción a actualizar y en `req.body` los nuevos datos.
 * @param {Object} res - Objeto de respuesta. Devuelve la canción actualizada o un mensaje de error si la operación falla.
 */
exports.updateSongById = async (req, res) => {
    try {
        const [updated] = await Song.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Canción no encontrada' });
        }
        const updatedSong = await Song.findByPk(req.params.id);
        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Elimina una canción por su ID.
 * @param {Object} req - Objeto de solicitud. Debe contener en `req.params.id` el ID de la canción a eliminar.
 * @param {Object} res - Objeto de respuesta. Devuelve un estado `204` si se elimina correctamente o un error si no se encuentra.
 */
exports.deleteSongById = async (req, res) => {
    try {
        const rowsDeleted = await Song.destroy({ where: { id: req.params.id } });
        if (!rowsDeleted) {
            return res.status(404).json({ error: 'Canción no encontrada' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
