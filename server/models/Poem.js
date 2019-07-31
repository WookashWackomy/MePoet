const mongoose = require("mongoose");

const PoemSchema = new mongoose.Schema({
  author: {
    type: String
  },
  authorFBID: {
    type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  starSum: {
    type: Number,
    default: 0
  },
  numberOfVotes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Poem", PoemSchema);
