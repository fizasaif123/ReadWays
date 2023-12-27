const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author:String,
  biography: String,
  genre: String,
  isbn: String,
  // Additional book-related fields as needed
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
