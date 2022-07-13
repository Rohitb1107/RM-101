const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: flase },
    email: { type: String, required: true },
    img: { type: String, required: false },
    password: { type: String, required: true },
    followers: { type: Number, required: true },
    following: { type: Number, required: true },
    personalDetail: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
