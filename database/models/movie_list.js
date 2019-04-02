const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;


const movieSchema = new mongoose.Schema({
  id: Number,
  adult: Boolean,
  original_title: String,
  original_language: String,
  overview: String,
  popularity: Number,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;