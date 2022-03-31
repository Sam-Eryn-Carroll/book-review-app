const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');
const isLoggedIn = require('../config/auth');

router.get('/', booksCtrl.index);
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', booksCtrl.show);
// router.get('/all', booksCtrl.allBooks);
router.post('/', isLoggedIn, booksCtrl.create);
router.put('/:id', isLoggedIn, booksCtrl.update);
router.post('/:id/genres', isLoggedIn, booksCtrl.addToGenres)


module.exports = router;