const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Array, required: true},
    country: {type: String},
    language: {type: String},
    publisher: {type: Array},
    publicationDate: {type: Date},
    pages: {type: Number}
})

module.exports = mongoose.model('Book', bookSchema);