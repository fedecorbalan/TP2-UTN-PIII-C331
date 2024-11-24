const { Artist } = require('../models||');

const getAllArtists = async (req, res) => {
try {
    const artists = await Artist.findAll();
    res.json(artists);
} catch (error) {
    res.status(500).json({ error: 'Error al obtener los artistas' });
}
};

const createArtist = async (req, res) => {
const { name, surname } = req.body;
try {
    const newArtist = await Artist.create({ name, surname });
    res.status(201).json(newArtist);
} catch (error) {
    res.status(500).json({ error: 'Error al crear el artista' });
}
};

const getArtistById = async (req, res) => {
const { id } = req.params;
try {
    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ error: 'Artista no encontrado' });
    res.json(artist);
} catch (error) {
    res.status(500).json({ error: 'Error al obtener el artista' });
}
};

const updateArtist = async (req, res) => {
    const { id } = req.params;
    const { name, surname } = req.body;
    try {
    const artist = await Artist.findByPk(id);
    if (!artist) return res.status(404).json({ error: 'Artista no encontrado' });

    await artist.update({ name, surname });
    res.json(artist);
    } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el artista' });
    }
};


const deleteArtist = async (req, res) => {
const { id } = req.params;
try {
    const result = await Artist.destroy({ where: { id } });
    if (result === 0) return res.status(404).json({ error: 'Artista no encontrado' });
    res.json({ message: 'Artista eliminado correctamente' });
} catch (error) {
    res.status(500).json({ error: 'Error al eliminar el artista' });
}
};

module.exports = { getAllArtists, createArtist, getArtistById, updateArtist, deleteArtist};
