const Genre = require('../models/genre');
const Book = require('../models/book');

module.exports = {
    new: newGenre,
    create
}

function newGenre(req, res) {
    Genre.find({}, function (err, genres) {
        res.render('genres/new', {
          title: 'Add Genre',
          genres
        });
      })
}

function create(req, res) {
  Genre.create(req.body, function (err, genre) {
    res.redirect('/genres/new');
  });
}