const { Song, Artist } = require('../models');

const getAllSongs = async (req, res) => {
    const { page = 1, limit = 10, sort = 'ASC', type, status } = req.query;
    const offset = (page - 1) * limit;

    const whereConditions = {};
    if (type) whereConditions.type = type; // Filtrar por categoría
    if (status) whereConditions.status = status; // Filtrar por estado

    try {
    const { count, rows: songs } = await Song.findAndCountAll({
        where: whereConditions,
        include: {
        model: Artist,
        attributes: ['name', 'surname'], // Incluye detalles del artista
        },
        order: [['createdAt', sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']],
        limit: parseInt(limit, 10),
        offset: parseInt(offset, 10),
    });

    res.json({
        total: count,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages: Math.ceil(count / limit),
        songs,
    });
    } catch (error) {
    res.status(500).json({ error: 'Error al obtener las canciones' });
    }
};

const createSong = async (req, res) => {
const { title, duration, type, status, artistId } = req.body;

try {
    const artist = await Artist.findByPk(artistId);
    if (!artist) return res.status(404).json({ error: 'Artista no encontrado' });

    const newSong = await Song.create({ title, duration, type, status, artistId });
    res.status(201).json(newSong);
} catch (error) {
    res.status(500).json({ error: 'Error al crear la canción' });
}
};

const getSongById = async (req, res) => {
    const { id } = req.params;
    try {
    const song = await Song.findByPk(id, {
        include: {
        model: Artist,
        attributes: ['name', 'surname'],
        },
    });
    if (!song) return res.status(404).json({ error: 'Canción no encontrada' });
    res.json(song);
    } catch (error) {
    res.status(500).json({ error: 'Error al obtener la canción' });
    }
};

const updateSong = async (req, res) => {
    const { id } = req.params;
    const { title, duration, type, status } = req.body;
    try {
    const song = await Song.findByPk(id);
    if (!song) return res.status(404).json({ error: 'Canción no encontrada' });

    await song.update({ title, duration, type, status });
    res.json(song);
    } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la canción' });
    }
};

const deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
    const result = await Song.destroy({ where: { id } });
    if (result === 0) return res.status(404).json({ error: 'Canción no encontrada' });
    res.json({ message: 'Canción eliminada correctamente' });
    } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la canción' });
    }
};

module.exports = { getAllSongs, createSong, getSongById, updateSong, deleteSong };
