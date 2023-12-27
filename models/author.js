const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    biography: String,
    // Additional author-related fields as needed
  });
  
  const Author = mongoose.model('Author', authorSchema);
  
  module.exports = Author;
  