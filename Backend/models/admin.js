const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 32,
    },
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 12,
    },
    contact: {
      type: Number,
      unique: true,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
    avatar: {
      type: String,
    },
    otp: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },
    isConfirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("admin", adminSchema);
