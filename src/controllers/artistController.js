const Artist = require('../models/Artist');

// Crear un autor
exports.createArtist = async (req, res) => {
    try {
        const artist = await Artist.create(req.body);
        res.status(201).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Leer todos los autores
exports.getAllArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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
