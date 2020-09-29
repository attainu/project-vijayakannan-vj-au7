const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  avatar: {
    type: String,
  },
  otp: {
    type: String,
  },
  role: {
    type: String,
    default: "user",
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("user", userSchema);
