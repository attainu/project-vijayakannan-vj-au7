const { model, Schema } = require("mongoose");

const doctorSchema = new Schema({
  docid: {
    type: Number,
    required:true,
  },
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
    // unique:true
  },
  description: {
    type: String,
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
});

module.exports = model("doctor", doctorSchema);
