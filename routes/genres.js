const express = require('express');
const router = express.Router();
const genresCtrl = require('../controllers/genres');

router.get('/new', genresCtrl.new);
router.post('/', genresCtrl.create);

module.exports = router;