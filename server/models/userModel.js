const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bets = require('./betModel');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bets' }],

  //what else are we trying to populate?
});

module.exports = mongoose.model('User', userSchema);
