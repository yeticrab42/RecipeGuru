const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = require('./userModel');

const favoritesSchema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  usedIngredients: [
    {
      type: String,
    },
  ],
  missedIngredients: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Favorites', favoritesSchema);
