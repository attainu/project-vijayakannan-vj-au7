const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  avatar: {
    type: String,
  },
  isConfirmed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("user", userSchema);
