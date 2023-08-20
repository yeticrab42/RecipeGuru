const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favorites = require('./favoritesModel');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorited: [{ type: Schema.Types.ObjectId, ref: 'favorites' }],
});

module.exports = mongoose.model('User', userSchema);
