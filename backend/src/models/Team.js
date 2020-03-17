const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  learningObjectives: {
    type: String
  },
  subjects: [
    {
      type: String
    }
  ],
  tags: [
    {
      type: String
    }
  ],
  grades: [
    {
      type: String
    }
  ],
  published: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId
  },
  date: {
    created: {
      type: Date,
      default: Date.now()
    }
  }
});

const Team = mongoose.model("team", TeamSchema);

module.exports = Team;
