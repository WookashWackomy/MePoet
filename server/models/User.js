const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  username: {
    type: String
  },
  email: {
    type: String
  },
  poems: {
    type: [String]
  },
  liked: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  },
  fbID: {
    type: String
  },
});

module.exports = mongoose.model('User', UserSchema);
