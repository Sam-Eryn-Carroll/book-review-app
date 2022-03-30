const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.byTitle);
//router.get('/', booksCtrl.byAuthor);


module.exports = router;