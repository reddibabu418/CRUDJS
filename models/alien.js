const mongoose = require("mongoose");

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  tech: {
    type: String,
    required: false,
  },
  sub: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("Alien", alienSchema);
