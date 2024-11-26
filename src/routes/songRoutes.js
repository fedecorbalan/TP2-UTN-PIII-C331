const express = require('express');
const songController = require('../controllers/songController');
const Song = require('../models/Song');

const router = express.Router();

router.post('/', songController.createSong);
router.get('/', songController.getAllSongs);
router.get('/songs', async (req, res) => {
    try {
        console.log(req.query);
        const { page = 1, limit = 10, sort = 'ASC', genre, status } = req.query;

        const offset = (page - 1) * limit;
        const paginationLimit = parseInt(limit, 10);

        const whereConditions = {};
        if (genre) whereConditions.genre = genre;
        if (status) whereConditions.status = status;

        const songs = await Song.findAndCountAll({
            where: whereConditions,
            order: [['createdAt', sort.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']],
            limit: paginationLimit,
            offset: offset
        });

        res.json({
            totalRecords: songs.count,
            totalPages: Math.ceil(songs.count / paginationLimit),
            currentPage: parseInt(page, 10),
            data: songs.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las canciones.' });
    }
});
router.get('/:id', songController.getSongById);
router.put('/:id', songController.updateSongById);
router.delete('/:id', songController.deleteSongById);

module.exports = router;
