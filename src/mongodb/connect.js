const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

//Desktop location: C:\Program Files\MongoDB\Server\4.0
//Desktop dev env
const server = 'localhost';
const database = 'ecogame';
const user = 'martin';
const password = 'Kalle123';

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`, { useNewUrlParser: true });

module.exports = mongoose;