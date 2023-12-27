const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: String,
    // Additional genre-related fields as needed
  });
  
  const Genre = mongoose.model('Genre', genreSchema);
  
  module.exports = Genre;
  