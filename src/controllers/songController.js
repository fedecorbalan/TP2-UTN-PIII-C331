const Song = require('../models/Song');

// Crear una canción
exports.createSong = async (req, res) => {
    try {
        const song = await Song.create(req.body);
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Leer todas las canciones
exports.getAllSongs = async (req, res) => {
    try {
        const songs = await Song.findAll();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Leer una canción por ID
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

// Actualizar una canción por ID
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

// Eliminar una canción por ID
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
