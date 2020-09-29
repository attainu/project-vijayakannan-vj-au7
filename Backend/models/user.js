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
<<<<<<< HEAD
=======
    minlength: 10,
    maxlength: 10,
>>>>>>> e911c489d2cb54a7bdd2ac1cdd75be9468f174c7
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
