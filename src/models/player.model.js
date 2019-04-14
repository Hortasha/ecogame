const mongoose = require('../mongodb/connect');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    }
});

module.exports = mongoose.model('Player', PlayerSchema);