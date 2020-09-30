const { model, Schema } = require("mongoose");

const doctorSchema = new Schema(
  {
    docid: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 32,
    },
    department: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    leave: {
      type: Array,
      default: [],
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Doctor", doctorSchema);
