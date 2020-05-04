const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  role: {
    type: String,
    //required: true
  },
  school: {
    type: String,
  },
  description: {
    type: String,
  },
  country: {
    type: String,
  },
  interests: [
    {
      type: String,
    },
  ],
  avatar: {
    type: String,
  },
  userImages: [
    {
      name: {
        type: String
      },
      url: {
        type: String
      }
    }
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  classrooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
  date: {
    created: {
      type: Date,
      default: Date.now(),
    },
  },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
