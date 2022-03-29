const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
})

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Array, required: true},
    country: {type: String},
    language: {type: String},
    publisher: {type: Array},
    publicationDate: {type: String},
    pages: {type: Number},
    reviews: [reviewSchema]
})

module.exports = mongoose.model('Book', bookSchema);