const mongoose = require("mongoose");
const shortId = require("shortid");

// create schema
const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

// create collections
// const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);

// create documents
module.exports = mongoose.model("ShortUrl", shortUrlSchema);

// export model
