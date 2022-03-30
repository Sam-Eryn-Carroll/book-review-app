const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.index);
router.get('/new', booksCtrl.new);
router.get('/:id', booksCtrl.show);
// router.get('/all', booksCtrl.allBooks);
router.post('/', booksCtrl.create);
router.post('/:id/genres', booksCtrl.addToGenres)


module.exports = router;