const mongoose = require("mongoose");

const SupplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

const Supply = mongoose.model("supply", SupplySchema);

module.exports = Supply;
