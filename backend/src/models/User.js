const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    }
  },
  school: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  date: {
    created: {
      type: Date,
      default: Date.now()
    }
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
