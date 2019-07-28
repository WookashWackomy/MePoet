const mongoose = require('mongoose');

const PoemSchema = new mongoose.Schema({
    author:{
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
});

module.exports = mongoose.model('Poem',PoemSchema);
