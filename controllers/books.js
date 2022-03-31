const Book = require('../models/book');
const Genre = require('../models/genre')

module.exports = {
    index,
    new: newBook,
    create,
    show,
    addToGenres,
    byTitle,
    update
}

function index(req, res) {
    Book.find({}, function(err, books) {
        console.log(books)
        res.render('books/index', {title: 'All Books', books})
    })
}

function newBook(req, res) {
    res.render('books/new', {title: 'Add Books'});
}

function create(req, res) {
    const book = new Book(req.body);
    book.save(function(err) {
        if (err) return res.render('books/new');
        res.redirect('/books')
    })
}

function show(req, res) {
    Book.findById(req.params.id)
        .populate('genres').exec(function(err, book) {
            Genre.find(
              {
                _id: {
                  $nin: book.genres
                }
              },
        function(err, genres) {
        res.render('books/show', {title: 'Book Details', book, genres})
        })   
    })
}

function addToGenres(req, res) {
    Book.findById(req.params.id, function(err, book) {
        book.genres.push(req.body.genreId)
        book.save(function(err) {
          res.redirect(`/books/${book._id}`)
        })
      })
}


function byTitle(req, res) {
    // let bookQuery = req.body.title ? {title: new RegExp(req.body.title, 'i')} : {};
    Book.find({title: req.query.title}, function(err, books) {
       // Book.find({author: req.query.author}, function(err, books) {
            res.render('books/index', {
                books,
                user: req.user,
                titleSearch: req.query.title,
                title: "All Books"
            })
        }), Book.find({author: req.query.author}, function(err, books) {
            res.render('books/index', {
                books,
                user: req.user,
                authorSearch: req.query.author,
                title: "All Books"
        })     
})
}

function update(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/new', {title: 'Edit books'});
    })
    
}

// function byAuthor(req, res) {
    
//     Book.find({author: req.query.author}, function(err, books) {
//         res.render('books/index', {
//             books,
//             user: req.user,
//             authorSearch: req.query.author,
//             title: "All Books"
//         })
//     })
// }
