const express = require('express');
const {getAllArtists, createArtist, getArtistById, deleteArtist} = require('../controllers/artistController');

const router = express.Router();

router.get('/', getAllArtists); // Obtener todos los artistas
router.post('/', createArtist); // Crear un artista
router.get('/:id', getArtistById); // Obtener un artista por ID
router.delete('/:id', deleteArtist); // Eliminar un artista por ID

module.exports = router;
