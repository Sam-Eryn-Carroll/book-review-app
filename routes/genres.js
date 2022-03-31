const express = require('express');
const router = express.Router();
const genresCtrl = require('../controllers/genres');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, genresCtrl.new);
router.post('/', isLoggedIn, genresCtrl.create);

module.exports = router;