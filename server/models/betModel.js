const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const betsSchema = new Schema({
    //we want to include payout amounts based on bets
        //payout algo
            //favored team (price shows '-') bet+(price/10)
            //unfavored team bet * (price/100)
    bet: {type: Number, required: true},
    payout: {type: Number, required: true},
    chosenTeam: {type: String, required: true},
    rivalTeam: {type: String, required: true}
});

module.exports = mongoose.model('bet', betsSchema);