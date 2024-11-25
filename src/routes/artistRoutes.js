const express = require('express');
const artistController = require('../controllers/artistController');

const router = express.Router();

router.post('/', artistController.createArtist);
router.get('/', artistController.getAllArtists);
router.get('/:id', artistController.getArtistById);
router.delete('/:id', artistController.deleteArtistById);

module.exports = router;
