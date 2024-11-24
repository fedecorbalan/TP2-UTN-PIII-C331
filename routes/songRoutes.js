const express = require('express');
const {getAllSongs, createSong, getSongById, updateSong, deleteSong} = require('../controllers/songController');

const router = express.Router();

router.get('/', getAllSongs); // Obtener todas las canciones
router.post('/', createSong); // Crear una canción
router.get('/:id', getSongById); // Obtener una canción por ID
router.put('/:id', updateSong); // Actualizar una canción por ID
router.delete('/:id', deleteSong); // Eliminar una canción por ID

module.exports = router;
