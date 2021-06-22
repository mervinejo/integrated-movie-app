var express = require('express');
var router = express.Router();

const controller = require('../controllers/movieController');

//Find all movies
router.get('/', controller.findAllMovies);
//Find By Movie Id
router.get('/:movieId', controller.findByMovieId);
//Add New Movie
router.post('/add', controller.addNewMovie);

module.exports = router;