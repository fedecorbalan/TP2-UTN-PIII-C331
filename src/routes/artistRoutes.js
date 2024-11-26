const express = require('express');
const artistController = require('../controllers/artistController');

// Crea un nuevo enrutador de Express para manejar las rutas relacionadas con `Artist`.
const router = express.Router();

/**
 * Rutas para gestionar artistas (CRUD):
 * 
 * POST `/`: Crear un nuevo artista.
 * GET `/`: Obtener la lista de todos los artistas.
 * GET `/:id`: Obtener un artista específico por su ID.
 * DELETE `/:id`: Eliminar un artista específico por su ID.
 */
router.post('/', artistController.createArtist);
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.delete('/:id', artistController.deleteArtistById);

module.exports = router;
