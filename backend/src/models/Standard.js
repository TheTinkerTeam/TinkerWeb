const mongoose = require("mongoose");

const StandardSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  skills: [
    {
      type: String,
    },
  ],
});

const Standard = mongoose.model("standard", StandardSchema);

module.exports = Standard;
