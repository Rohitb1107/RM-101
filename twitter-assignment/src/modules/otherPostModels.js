const mongoose = require("mongoose");

const likeCommSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});
